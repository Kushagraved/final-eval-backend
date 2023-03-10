const express = require('express');
const { createNewType, getCollectionById, addNewField, editField, deleteField, getFields, getContentTypes } = require('../controllers/contentTypeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//add middleware to protect routes

router.post('/new-type', authMiddleware, createNewType);
router.patch('/:contentTypeId/add-field', authMiddleware, addNewField);
router.patch('/:contentTypeId/edit-field', authMiddleware, editField);
router.patch('/:contentTypeId/delete-field', authMiddleware, deleteField);


router.get('/', authMiddleware, getContentTypes);
router.get('/:contentTypeId/get-fields', authMiddleware, getFields);
router.get('/:contentTypeId/get-collection', authMiddleware, getCollectionById);


module.exports = router;