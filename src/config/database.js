const Sequelize = require('sequelize');
const { database, username, password, options } = require('config').get('database');

const sequelize = new Sequelize(database, username, password, options);

module.exports = sequelize;
