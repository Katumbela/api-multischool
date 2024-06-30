'use strict';
import { Sequelize, DataTypes, Model, UUIDV4 } from 'sequelize';

interface SchoolsAttributes {
  id: string;
  school_name: string;
  founder: string;
  founded_year: number;
  school_email: string;
  province: string;
  school_type: string;
}

export class Schools extends Model<SchoolsAttributes> implements SchoolsAttributes {
  public id!: string;
  public school_name!: string;
  public founder!: string;
  public founded_year!: number;
  public school_email!: string;
  public province!: string;
  public school_type!: string;
}

export const SchoolFactory = (sequelize: Sequelize, dataTypes: typeof DataTypes): typeof Schools => {
  Schools.init({
    id: {
      type: dataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    school_name: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    school_email: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    founder: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    school_type: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    founded_year: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    province: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Schools',
  });
  return Schools;
};
