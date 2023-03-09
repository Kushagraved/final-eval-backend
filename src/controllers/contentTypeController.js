const { createNewTypeService, getCollectionByIdService, addNewFieldService, editFieldService, deleteFieldService, getFieldsService, getContentTypesService } = require('../services/contentTypeServices');

const createNewType = async (req, res) => {
  try {
    const { name } = req.body;
    const newType = await createNewTypeService(name);
    res.status(201).json({
      message: 'New type created',
      data: newType
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });

  }
};

const addNewField = async (req, res) => {
  try {
    const { contentTypeId } = req.params;
    const { fieldValue } = req.body;
    const newField = await addNewFieldService(contentTypeId, fieldValue);
    res.status(201).json({
      message: 'New field added',
      data: newField
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });

  }
};
const editField = async (req, res) => {
  try {
    const { contentTypeId } = req.params;
    const { fieldId, fieldValue } = req.body;
    const editedField = await editFieldService(contentTypeId, fieldId, fieldValue);
    res.status(200).json({
      message: 'Field edited',
      data: editedField
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};
const deleteField = async (req, res) => {
  try {
    const { contentTypeId } = req.params;
    const { fieldId } = req.body;
    const deletedField = await deleteFieldService(contentTypeId, fieldId);
    res.status(200).json({
      message: 'Field deleted',
      data: deletedField
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: error.message
    });
  }
};



const getCollectionById = async (req, res) => {
  try {
    const { contentTypeId } = req.params;
    const collection = await getCollectionByIdService(contentTypeId);
    res.status(200).json({
      message: 'Collection fetched',
      data: collection
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

const getFields = async (req, res) => {
  try {
    const { contentTypeId } = req.params;
    const fields = await getFieldsService(contentTypeId);
    res.status(200).json({
      message: 'Fields fetched',
      data: fields
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

const getContentTypes = async (req, res) => {
  try {
    const contentTypes = await getContentTypesService();
    res.status(200).json({
      message: 'Content types fetched',
      data: contentTypes
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};





module.exports = {
  createNewType,
  addNewField,
  getCollectionById,
  editField,
  deleteField,
  getFields,
  getContentTypes
};