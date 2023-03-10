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
  const newField = {
    [uuidv4()]: fieldValue
  };
  contentType.fields = {
    ...contentType.fields,
    ...newField

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

  return newField;
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
  console.log(collection);
  if (collection.collections.length === 0) {
    const updatedField = {
      [fieldId]: fieldValue
    };
    // contentType.fields = {
    //   ...contentType.fields,
    //   ...updatedField
    // };

    const newUpdatedField = await ContentType.update({ fields: { ...contentType.fields, ...updatedField } }, {
      where: {
        id: contentTypeId,
      },
      returning: true,

    });

    // await contentType.save();
    return newUpdatedField[1];
  }

  throw new Error('Cant edit field  if it has entries in collection ');
};

const deleteFieldService = async (contentTypeId, fieldId) => {
  console.log('deletefieldsevr');
  const contentType = await ContentType.findOne({
    where: {
      id: contentTypeId
    }
  });
  console.log(contentType);
  const fieldValue = contentType.fields[fieldId];

  delete contentType.dataValues.fields[fieldId];
  contentType.fields = { ...contentType.dataValues.fields };

  await ContentType.update({ fields: contentType.fields }, {
    where: {
      id: contentTypeId
    }
  });

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