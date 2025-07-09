const express = require("express");
const Blog = require("../models/Blog");
const User = require("../models/User");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.use(auth);

// Create Blog
router.post("/", async (req, res) => {
  try {
    const blog = new Blog({ ...req.body, createdBy: req.user.userId });
    await blog.save();
    res.status(201).json({ msg: "Blog created", blog });
  } catch (err) {
    res.status(500).json({ msg: "Failed to create blog", error: err.message });
  }
});

// Get Own Blogs
router.get("/", async (req, res) => {
  try {
    const blogs = await Blog.find({ createdBy: req.user.userId });
    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch blogs", error: err.message });
  }
});

// Update Blog
router.put("/:id", async (req, res) => {
  try {
    const blog = await Blog.findOneAndUpdate(
      { _id: req.params.id, createdBy: req.user.userId },
      req.body,
      { new: true }
    );

    if (!blog) return res.status(404).json({ msg: "Blog not found or unauthorized" });

    res.status(200).json({ msg: "Blog updated", blog });
  } catch (err) {
    res.status(500).json({ msg: "Failed to update blog", error: err.message });
  }
});

// Delete Blog
router.delete("/:id", async (req, res) => {
  try {
    const blog = await Blog.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId
    });

    if (!blog) return res.status(404).json({ msg: "Blog not found or unauthorized" });

    res.status(200).json({ msg: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Failed to delete blog", error: err.message });
  }
});

// Aggregation: Blog Stats
router.get("/stats", async (req, res) => {
  try {
    const totalBlogs = await Blog.countDocuments();

    const blogCountPerUser = await Blog.aggregate([
      { $group: { _id: "$createdBy", blogCount: { $sum: 1 } } },
      {
        $lookup: {
          from: "users",
          localField: "_id",
          foreignField: "_id",
          as: "user"
        }
      },
      {
        $project: {
          blogCount: 1,
          userName: { $arrayElemAt: ["$user.name", 0] },
          userEmail: { $arrayElemAt: ["$user.email", 0] }
        }
      }
    ]);

    const commonTags = await Blog.aggregate([
      { $unwind: "$tags" },
      { $group: { _id: "$tags", count: { $sum: 1 } } },
      { $sort: { count: -1 } },
      { $limit: 5 }
    ]);

    res.status(200).json({
      totalBlogs,
      blogCountPerUser,
      mostCommonTags: commonTags
    });
  } catch (err) {
    res.status(500).json({ msg: "Failed to fetch stats", error: err.message });
  }
});

module.exports = router;
