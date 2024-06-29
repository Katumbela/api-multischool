'use strict';

import { DataTypes } from "sequelize";
import { UserFactory } from "./user";

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize'); 
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];
const db: any = {};
 
const sequelizeConfig = config[env];

const sequelize = new Sequelize(
  sequelizeConfig.database,
  sequelizeConfig.username,
  sequelizeConfig.password,
  {
    host: sequelizeConfig.host,
    dialect: sequelizeConfig.dialect,
  }
);
 
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Inicialize os modelos
db.User = UserFactory(sequelize, DataTypes);

export default db;
