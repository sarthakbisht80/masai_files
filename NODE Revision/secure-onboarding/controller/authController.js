const User = require('../models/User');
const jwt = require('jsonwebtoken');
const { validateSignup } = require('../utils/validators');
const { ALLOWED, LABELS } = require('../constants/secretQuestions');

const JWT_SECRET = process.env.JWT_SECRET || 'changeme';
const signToken = (user) => jwt.sign({ sub: user._id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '1d' });

exports.getSecretQuestions = (req, res) => {
  res.json({ questions: ALLOWED.map((k) => ({ key: k, label: LABELS[k] })) });
};

exports.signup = async (req, res) => {
  const { name, email, password, secretQuestionKey, secretAnswer } = req.body;
  const errors = validateSignup({ name, email, password, secretQuestionKey, secretAnswer });
  if (errors.length) return res.status(400).json({ errors });

  const exists = await User.findOne({ email });
  if (exists) return res.status(409).json({ message: 'Email exists' });

  const user = new User({ name, email, password, secretQuestionKey, secretAnswerHash: secretAnswer });
  await user.save();

  const token = signToken(user);
  res.status(201).json({ token, user: { id: user._id, name, email, role: user.role, secretQuestionKey } });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select('+password');
  if (!user || !(await user.comparePassword(password))) return res.status(401).json({ message: 'Invalid credentials' });

  const token = signToken(user);
  res.json({ token, user: { id: user._id, name: user.name, email, role: user.role, secretQuestionKey: user.secretQuestionKey } });
};

exports.resetPassword = async (req, res) => {
  const { email, secretAnswer, newPassword } = req.body;
  const user = await User.findOne({ email }).select('+secretAnswerHash');
  if (!user || !(await user.compareSecretAnswer(secretAnswer))) {
    return res.status(400).json({ message: 'Secret answer incorrect' });
  }
  user.password = newPassword;
  await user.save();
  res.json({ message: 'Password reset successful' });
};
