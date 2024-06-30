import { Sequelize, DataTypes, Model } from 'sequelize';

interface CompanyAttributes {
  id: number;
  companyName: string;
  foundedYear: number;
  category: string;
  founderName: string;
  biography: string;
  contact: string;
  email: string;
}

export class Company extends Model<CompanyAttributes> implements CompanyAttributes {
  public id!: number;
  public companyName!: string;
  public foundedYear!: number;
  public category!: string;
  public founderName!: string;
  public biography!: string;
  public contact!: string;
  public email!: string;
}

export const CompanyFactory = (sequelize: Sequelize, dataTypes: typeof DataTypes): typeof Company => {
  Company.init({
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    companyName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    foundedYear: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    category: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    founderName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    biography: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    contact: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: dataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
  }, {
    sequelize,
    modelName: 'Company',
  });

  return Company;
};
