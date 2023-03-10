const db = require('../database/models');
const { createNewEntryService, updateEntryService } = require('../src/services/collectionService');
describe('collection service', () => {
  it('should create a new entry ', async () => {
    jest.spyOn(db.Collection, 'create').mockResolvedValue({
      id: 1,
      contentTypeId: 1,
      entries: {
        title: 'test title',
        description: 'test description'
      }
    });

    const newEntry = await createNewEntryService(1, {});
    expect(newEntry).toEqual({
      id: 1,
      contentTypeId: 1,
      entries: {
        title: 'test title',
        description: 'test description'
      }
    });


  });
  it('should update a new entry', async () => {
    jest.spyOn(db.Collection, 'findOne').mockResolvedValue({
      id: 1,
      contentTypeId: 1,
      entries: {
        title: 'test title',
        description: 'test description'
      }
    }
    );
    jest.spyOn(db.Collection, 'update').mockResolvedValue([1, {
      id: 1,
      contentTypeId: 1,
      entries: {
        title: 'test title',
        description: 'test description'
      }
    }]
    );

    const updatedEntry = await updateEntryService(1, 1, {});
    expect(updatedEntry).toEqual({
      id: 1,
      contentTypeId: 1,
      entries: {
        title: 'test title',
        description: 'test description'
      }
    });
  });

});


