'use strict'

const Sequelize = require('sequelize');
const env = require('./env');
const sequelize = new Sequelize(env.DATABASE_NAME, env.DATABASE_USERNAME, env.DATABASE_PASSWORD, {
  host: env.DATABASE_HOST,
  port: env.DATABASE_PORT,
  dialect: env.DATABASE_DIALECT,
  define: {
    underscored: false,
    freezeTableName: true
  }
});


const db = {};


db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.something = require('../models/something.js') (sequelize, Sequelize);


sequelize
  .authenticate()
  .then(db.something.sync())

module.exports = db;
