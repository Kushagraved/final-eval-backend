const express = require('express');
const { createNewEntry, updateEntry, deleteEntry, getEntry } = require('../controllers/collectionController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//add middleware to protect routes

router.post('/new-entry', createNewEntry);
router.post('/update-entry', updateEntry);
router.delete('/delete-entry', deleteEntry);
router.post('/get-entry', getEntry);


module.exports = router;