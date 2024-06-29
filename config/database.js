require('dotenv').config();

module.exports = {
  "development": {
    "username": "sql8716902",
    "password": "zIApsI1ZiE",
    "database": "sql8716902",
    "host": "sql8.freesqldatabase.com",
    "dialect": "mysql",
    "dialectModule": require('mysql') // Use 'mysql' instead of 'mysql'
  },
  "test": {
    "username": "sql8716902",
    "password": "zIApsI1ZiE",
    "database": "sql8716902",
    "host": "sql8.freesqldatabase.com",
    "dialect": "mysql",
    "dialectModule": require('mysql') // Use 'mysql' instead of 'mysql'
  },
  "production": {
    "username": "sql8716902",
    "password": "zIApsI1ZiE",
    "database": "sql8716902",
    "host": "sql8.freesqldatabase.com",
    "dialect": "mysql",
    "dialectModule": require('mysql') // Use 'mysql' instead of 'mysql'
  }
};
