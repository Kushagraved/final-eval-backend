const { v4: uuidv4 } = require('uuid');
const { ContentType } = require('../../database/models');
const { Collection } = require('../../database/models');

const createNewTypeService = async (name) => {
  const newType = await ContentType.create({
    name,
    fields: {}
  });

  return newType;
};

const addNewFieldService = async (contentTypeId, fieldValue) => {
  const contentType = await ContentType.findOne({
    where: {
      id: contentTypeId
    }
  });
  contentType.fields = {
    ...contentType.fields,
    [uuidv4()]: fieldValue

  };
  await contentType.save();

  const collections = await Collection.findAll({
    where: {
      contentTypeId
    }
  });

  collections.forEach(async (collection) => {
    collection.entries = {
      ...collection.entries,
      [fieldValue]: ''
    };
    await collection.save();
  });

  return contentType;
};
const editFieldService = async (contentTypeId, fieldId, fieldValue) => {
  const contentType = await ContentType.findOne({
    where: {
      id: contentTypeId
    }
  });

  const collection = await ContentType.findOne({
    where: {
      id: contentTypeId
    },
    // attributes: ['fields'],
    include: [{
      model: Collection,
      as: 'collections',
    }]

  });
  if (collection.collections.length === 0) {
    contentType.fields = {
      ...contentType.fields,
      [fieldId]: fieldValue
    };

    await contentType.save();
    return contentType;
  }

  throw new Error('Cant edit field  if it has entries in collection ');
};

const deleteFieldService = async (contentTypeId, fieldId) => {
  const contentType = await ContentType.findOne({
    where: {
      id: contentTypeId
    }
  });

  const fieldValue = contentType.fields[fieldId];
  delete contentType.fields[fieldId];

  // console.log('fieldValue', fieldValue);
  await contentType.save();

  const collections = await Collection.findAll({
    where: {
      contentTypeId
    }
  });

  collections.forEach(async (collection) => {
    // console.log('fieldValue', fieldValue);
    // console.log('enteries', collection.entries);
    // eslint-disable-next-line no-unused-vars
    const { [fieldValue]: removedProperty, ...rest } = collection.entries;
    collection.entries = rest;
    await collection.save();
  });

  return contentType;
};


const getCollectionByIdService = async (contentTypeId) => {
  const collection = await ContentType.findOne({
    where: {
      id: contentTypeId
    },
    // attributes: ['fields'],
    include: [{
      model: Collection,
      as: 'collections',
    }]

  });

  return collection;

};

const getFieldsService = async (contentTypeId) => {
  const contentType = await ContentType.findOne({
    where: {
      id: contentTypeId
    }
  });

  return contentType.fields;
};

const getContentTypesService = async () => {
  const contentTypes = await ContentType.findAll();
  return contentTypes;
};

module.exports = {
  createNewTypeService,
  addNewFieldService,
  getCollectionByIdService,
  editFieldService,
  deleteFieldService,
  getFieldsService,
  getContentTypesService
};