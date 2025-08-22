const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');
const { ALLOWED } = require('../constants/secretQuestions');

const normalizeAnswer = (ans) => String(ans).trim().toLowerCase();

const UserSchema = new Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  password: { type: String, required: true, minlength: 8, select: false },
  role: { type: String, enum: ['user', 'admin'], default: 'user' },
  secretQuestionKey: { type: String, enum: ALLOWED, required: true },
  secretAnswerHash: { type: String, required: true, select: false },
  bio: { type: String, default: '' },
  avatarUrl: { type: String, default: '' }
}, { timestamps: true });

UserSchema.pre('save', async function (next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 12);
  }
  if (this.isModified('secretAnswerHash')) {
    this.secretAnswerHash = await bcrypt.hash(normalizeAnswer(this.secretAnswerHash), 12);
  }
  next();
});

UserSchema.methods.comparePassword = function (candidate) {
  return bcrypt.compare(candidate, this.password);
};

UserSchema.methods.compareSecretAnswer = function (candidate) {
  return bcrypt.compare(normalizeAnswer(candidate), this.secretAnswerHash);
};

module.exports = model('User', UserSchema);
