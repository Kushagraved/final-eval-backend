const express = require('express');
const { createNewEntry, updateEntry, deleteEntry, getEntry } = require('../controllers/collectionController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//add middleware to protect routes

router.post('/new-entry', authMiddleware, createNewEntry);
router.post('/update-entry', authMiddleware, updateEntry);
router.delete('/delete-entry', authMiddleware, deleteEntry);
router.post('/get-entry', authMiddleware, getEntry);


module.exports = router;