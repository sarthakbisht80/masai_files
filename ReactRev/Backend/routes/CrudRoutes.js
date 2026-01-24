const express = require("express");
const User = require("../Models/userModel");
const authMiddleware = require("../middleware/auth.middleware");

const router = express.Router();

/* ================= GET ALL USERS ================= */
router.get("/",  async (req, res) => {
  const users = await User.find().select("-password");
  res.json(users);
});
router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id).select("-password");
  res.json(user);
});

router.put("/:id",  async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  ).select("-password");

  res.json(updatedUser);
});

router.delete("/:id",  async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted successfully" });
});

module.exports = router;
