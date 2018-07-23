'use strict';

const env = {
  DATABASE_HOST: process.env.DB_SERVICE_HOST ,
  DATABASE_PORT: process.env.DB_PORT_5432_TCP_PORT ,
  DATABASE_USERNAME: process.env.POSTGRES_USER,
  DATABASE_PASSWORD: process.env.POSTGRES_PASSWORD,
  DATABASE_NAME: process.env.POSTGRES_DB,
  DATABASE_DIALECT: process.env.DATABASE_DIALECT || 'postgres',
  NODE_ENV: process.env.NODE_ENV || 'development'
};

module.exports = env;
