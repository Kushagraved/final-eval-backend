const express = require('express');
const { createNewType, getCollectionById, addNewField, editField, deleteField, getFields, getContentTypes } = require('../controllers/contentTypeController');
const authMiddleware = require('../middlewares/authMiddleware');
const router = express.Router();

//add middleware to protect routes

router.post('/new-type', createNewType);
router.patch('/:contentTypeId/add-field', addNewField);
router.patch('/:contentTypeId/edit-field', editField);
router.patch('/:contentTypeId/delete-field', deleteField);


router.get('/', getContentTypes);
router.get('/:contentTypeId/get-fields', getFields);
router.get('/:contentTypeId/get-collection', getCollectionById);


module.exports = router;