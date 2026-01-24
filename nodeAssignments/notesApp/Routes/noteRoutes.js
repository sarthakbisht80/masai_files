const express = require("express");
const Note = require("../models/Note");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Middleware for all note routes


// Create Note
router.post("/", async (req, res) => {
  try {
    const note = new Note({ ...req.body, createdBy: req.user.userId });
    await note.save();
    res.status(201).json({ msg: "Note created", note });
  } catch (err) {
    res.status(500).json({ msg: "Error creating note", error: err.message });
  }
});

// Get Notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({ createdBy: req.user.userId });
    res.status(200).json(notes);
  } catch (err) {
    res.status(500).json({ msg: "Error fetching notes", error: err.message });
  }
});

// Update Note
router.put("/:id", async (req, res) => {
  
const {id}= req.params;
const userId= req.user.userId;
  try {
    const note = await Note.findOneAndUpdate(
      { _id: id, createdBy: userId },
      req.body,
      { new: true }
    );

    if (!note) return res.status(404).json({ msg: "Note not found or unauthorized" });

    res.status(200).json({ msg: "Note updated", note });
  } catch (err) {
    res.status(500).json({ msg: "Error updating note", error: err.message });
  }
});

router.delete("/:id",async (req, res)=>{
  const {id}= req.params;
  try {
    const note = await Note.findByIdAndDelete({_id: id});
    if(!note){
      req.json({msg:"No such user found!"});
    }
    res.status(200).json({msg:"Note deleted succesfully"});

  } catch (error) {
      res.status(500).json({ msg: "Error updating note", error: err.message });
  }

}
)
















// Delete Note
router.delete("/:id", async (req, res) => {
  try {
    const note = await Note.findOneAndDelete({
      _id: req.params.id,
      createdBy: req.user.userId,
    });

    if (!note) return res.status(404).json({ msg: "Note not found or unauthorized" });

    res.status(200).json({ msg: "Note deleted" });
  } catch (err) {
    res.status(500).json({ msg: "Error deleting note", error: err.message });
  }
});

module.exports = router;
