const { ALLOWED } = require('../constants/secretQuestions');

exports.validateSignup = ({ name, email, password, secretQuestionKey, secretAnswer }) => {
  const errors = [];
  if (!name) errors.push('Name required');
  if (!email) errors.push('Email required');
  if (!password || password.length < 8) errors.push('Password min 8 chars');
  if (!secretQuestionKey || !ALLOWED.includes(secretQuestionKey)) errors.push('Invalid secret question');
  if (!secretAnswer) errors.push('Secret answer required');
  return errors;
};

exports.pickProfileFields = (body) => {
  const allowed = ['name', 'bio', 'avatarUrl'];
  return Object.fromEntries(Object.entries(body).filter(([k]) => allowed.includes(k)));
};
