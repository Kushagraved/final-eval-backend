const { Collection } = require('../../database/models');

const createNewEntryService = async (contentTypeId, data) => {
  const newEntry = await Collection.create({
    contentTypeId,
    entries: { ...data }
  });
  return newEntry;
};

const updateEntryService = async (contentTypeId, collectionId, data) => {
  const collection = await Collection.findOne({
    where: {
      id: collectionId
    }
  });
  collection.entries = { ...collection.entries, ...data };
  await collection.save();
  return collection;
};

const deleteEntryService = async (contentTypeId, collectionId) => {
  const collection = await Collection.findOne({
    where: {
      id: collectionId
    }
  });
  await collection.destroy();
  return collection;
};




module.exports = {
  createNewEntryService,
  updateEntryService,
  deleteEntryService
};