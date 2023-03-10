const db = require('../database/models')
const { createNewEntryService } = require('../src/services/collectionService');
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
});

