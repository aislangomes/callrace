const Sequelize = require("sequelize");
const dbConfig = require("../config/database.js")

const User = require('../models/User.js')
const Driver = require('../models/Driver.js')

const connection = new Sequelize(dbConfig)


User.init(connection)
Driver.init(connection)


module.exports = connection