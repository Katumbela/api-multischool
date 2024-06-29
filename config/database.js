require('dotenv').config();

module.exports = {
  "development": {
    "username": "sql8716902",
    "password": "zIApsI1ZiE",
    "database": "sql8716902",
    "host": "sql8.freesqldatabase.com",
    "dialect": "mysql",
    "dialectModule": require('mysql2'),
    "dialectOptions": {
      "typeCast": function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
          return field.string() === '1'; // 1 for true, 0 for false
        }
        return next();
      }
    }
  },
  "test": {
    "username": "sql8716902",
    "password": "zIApsI1ZiE",
    "database": "sql8716902",
    "host": "sql8.freesqldatabase.com",
    "dialect": "mysql",
    "dialectModule": require('mysql2'),
    "dialectOptions": {
      "typeCast": function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
          return field.string() === '1'; // 1 for true, 0 for false
        }
        return next();
      }
    }
  },
  "production": {
    "username": "sql8716902",
    "password": "zIApsI1ZiE",
    "database": "sql8716902",
    "host": "sql8.freesqldatabase.com",
    "dialect": "mysql",
    "dialectModule": require('mysql2'),
    "dialectOptions": {
      "typeCast": function (field, next) {
        if (field.type === 'TINY' && field.length === 1) {
          return field.string() === '1'; // 1 for true, 0 for false
        }
        return next();
      }
    }
  }
};
