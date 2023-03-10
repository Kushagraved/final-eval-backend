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

  const updatedEntry = await Collection.update({ entries: { ...collection.entries, ...data } }, { where: { id: collectionId }, returning: true, plain: true });
  // await collection.save();
  return updatedEntry[1];
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

const getEntryService = async (collectionId) => {
  const collection = await Collection.findOne({
    where: {
      id: collectionId
    }
  });
  return collection;
};



module.exports = {
  createNewEntryService,
  updateEntryService,
  deleteEntryService,
  getEntryService
};