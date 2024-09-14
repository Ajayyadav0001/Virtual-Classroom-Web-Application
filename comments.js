const express = require('express');
const Comment = require('../models/Comment');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { lecture, user, content, parentComment } = req.body;
    const newComment = new Comment({ lecture, user, content, parentComment });
    await newComment.save();
    res.status(201).json(newComment);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:lectureId', async (req, res) => {
  try {
    const { lectureId } = req.params;
    const comments = await Comment.find({ lecture: lectureId }).populate('user').populate('parentComment');
    res.json(comments);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
