var Sequelize = require('sequelize'),
    sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/example')

module.exports = sequelize