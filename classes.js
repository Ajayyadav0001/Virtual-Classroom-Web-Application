const express = require('express');
const Class = require('../models/Class');

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { name, description, instructor } = req.body;
    const newClass = new Class({ name, description, instructor });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/', async (req, res) => {
  try {
    const classes = await Class.find().populate('instructor');
    res.json(classes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
