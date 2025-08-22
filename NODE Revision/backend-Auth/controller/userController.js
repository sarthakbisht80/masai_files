exports.getUserDashboard = (req, res) => {
  res.json({ message: `Welcome User Dashboard, ${req.user.email}` });
};

exports.getAdminDashboard = (req, res) => {
  res.json({ message: `Welcome Admin Dashboard, ${req.user.email}` });
};
