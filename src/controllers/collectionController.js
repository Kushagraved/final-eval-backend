const { createNewEntryService, updateEntryService, deleteEntryService, getEntryService } = require('../services/collectionService');

const createNewEntry = async (req, res) => {
  try {
    const { contentTypeId, data } = req.body;
    const newEntry = await createNewEntryService(contentTypeId, data);
    res.status(201).json({
      message: 'New entry created',
      data: newEntry
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });

  }
};
const updateEntry = async (req, res) => {
  try {
    const { contentTypeId, collectionId, data } = req.body;
    const updatedEntry = await updateEntryService(contentTypeId, collectionId, data);
    res.status(201).json({
      message: 'Entry updated',
      data: updatedEntry
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { contentTypeId, collectionId } = req.body;
    const deletedEntry = await deleteEntryService(contentTypeId, collectionId);
    res.status(201).json({
      message: 'Entry deleted',
      data: deletedEntry
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};

const getEntry = async (req, res) => {
  try {
    console.log(55,req.body);
    const { collectionId } = req.body;
    console.log(collectionId);
    const entry = await getEntryService(collectionId);
    res.status(201).json({
      message: 'Entry fetched',
      data: entry
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'Internal server error'
    });
  }
};


module.exports = {
  createNewEntry,
  updateEntry,
  deleteEntry,
  getEntry
};