'use strict';

import { DataTypes } from "sequelize";
import { StudentFactory } from "./student";
import { SchoolFactory } from './schools';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../../config/database.js')[env];
const db: any = {};

const sequelizeConfig = config[env];

const sequelize = new Sequelize(
  "sql8716902", "sql8716902", "zIApsI1ZiE",
  {
    host: "sql8.freesqldatabase.com",
    dialect: 'mysql',
  }
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Inicialize os modelos
db.Student = StudentFactory(sequelize, DataTypes);
db.Schools = SchoolFactory(sequelize, DataTypes);

export default db;
