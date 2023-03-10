const { createNewEntry, updateEntry, deleteEntry } = require('../src/controllers/collectionController');
const collectionService = require('../src/services/collectionService');
describe('Collection Controller', () => {
  it('should create new entry and should return 201', async () => {
    const mockReq = {
      body: {
        contentTypeId: '5f9f1b0b0b5b1c0b8c0b0b0b',
        data: {
          title: 'test title',
          description: 'test description'
        }
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.spyOn(collectionService, 'createNewEntryService').mockResolvedValueOnce({
      'id': 39,
      'contentTypeId': 11,
      'entries': {
        'name': 'Japanese',
        'difficulty': '20',
        'country': 'Japan'
      },
      'updatedAt': '2023-03-10T11:51:41.228Z',
      'createdAt': '2023-03-10T11:51:41.228Z'
    });
    await createNewEntry(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'New entry created',
      data: {
        'id': 39,
        'contentTypeId': 11,
        'entries': {
          'name': 'Japanese',
          'difficulty': '20',
          'country': 'Japan'
        },
        'updatedAt': '2023-03-10T11:51:41.228Z',
        'createdAt': '2023-03-10T11:51:41.228Z'
      }
    });



  });
  it('should create new entry and should return 500', async () => {
    const mockReq = {
      body: {
        contentTypeId: '5f9f1b0b0b5b1c0b8c0b0b0b',
        data: {
          title: 'test title',
          description: 'test description'
        }
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.spyOn(collectionService, 'createNewEntryService').mockRejectedValueOnce(new Error('Internal server error'));
    await createNewEntry(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'Internal server error'
    });
  }
  );
  it('should update entry and should return 201', async () => {
    const mockReq = {
      body: {
        contentTypeId: '5f9f1b0b0b5b1c0b8c0b0b0b',
        collectionId: '5f9f1b0b0b5b1c0b8c0b0b0b',
        data: {
          title: 'test title',
          description: 'test description'
        }
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.spyOn(collectionService, 'updateEntryService').mockResolvedValueOnce({
      'id': 39,
      'contentTypeId': 11,
      'entries': {
        'name': 'Japanese',
        'difficulty': '20',
        'country': 'Japan'
      },
      'updatedAt': '2023-03-10T11:51:41.228Z',
      'createdAt': '2023-03-10T11:51:41.228Z'
    });
    await updateEntry(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(201);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'Entry updated',
      data: {
        'id': 39,
        'contentTypeId': 11,
        'entries': {

          'name': 'Japanese',
          'difficulty': '20',
          'country': 'Japan'
        },
        'updatedAt': '2023-03-10T11:51:41.228Z',
        'createdAt': '2023-03-10T11:51:41.228Z'
      }
    });
  });
  it('should update entry and should return 500', async () => {
    const mockReq = {
      body: {
        contentTypeId: '5f9f1b0b0b5b1c0b8c0b0b0b',
        collectionId: '5f9f1b0b0b5b1c0b8c0b0b0b',
        data: {
          title: 'test title',
          description: 'test description'
        }
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.spyOn(collectionService, 'updateEntryService').mockRejectedValueOnce(new Error('Internal server error'));
    await updateEntry(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'Internal server error'
    });
  }
  );

  it('should delete entry and should return 500', async () => {
    const mockReq = {
      body: {
        contentTypeId: '5f9f1b0b0b5b1c0b8c0b0b0b',
        collectionId: '5f9f1b0b0b5b1c0b8c0b0b0b'
      }
    };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    jest.spyOn(collectionService, 'deleteEntryService').mockRejectedValueOnce(new Error('Internal server error'));
    await deleteEntry(mockReq, mockRes);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({
      message: 'Internal server error'
    });
  }
  );

});



