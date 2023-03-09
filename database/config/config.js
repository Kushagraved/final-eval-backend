module.exports = {
  'development': {
    'username': 'postgres',
    'password': 'postgres',
    'database': 'cms',
    'host': '127.0.0.1',
    'dialect': 'postgres'
  },
  'test': {
    'username': 'postgres',
    'password': null,
    'database': 'database_test',
    'host': '127.0.0.1',
    'dialect': 'postgres'
  },
  'production': {
    'username': 'root',
    'password': null,
    'database': 'database_production',
    'host': '127.0.0.1',
    'dialect': 'mysql'
  },
  'docker': {
    'username': 'postgres',
    'password': 'postgres',
    'database': 'cms',
    'host': 'postgres',
    'dialect': 'postgres'
  }
};
