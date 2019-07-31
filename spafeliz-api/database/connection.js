const Sequelize = require('Sequelize');
const conn = new Sequelize('utGHAUrUE5', 'utGHAUrUE5', 'FiSHieccTP',
  {
    host: 'remotemysql.com',
    dialect: 'mysql'
  });

conn.authenticate()
  .then(() => console.log('Connection OK with database'))
  .catch(err => console.log('Connection error with database'));

module.exports = conn;
