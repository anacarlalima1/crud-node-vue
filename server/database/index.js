const Sequelize = require('sequelize');
const configDB = require('../config/db.js');

const Student = require('../models/Student')

const connection = new Sequelize(configDB)

Student.init(connection)

module.exports = connection