const User = require('../models/User');
const { pickProfileFields } = require('../utils/validators');

exports.getProfile = async (req, res) => {
  const user = await User.findById(req.user.sub);
  res.json({ user });
};

exports.updateProfile = async (req, res) => {
  const updates = pickProfileFields(req.body);
  const user = await User.findByIdAndUpdate(req.user.sub, updates, { new: true });
  res.json({ message: 'Profile updated', user });
};
