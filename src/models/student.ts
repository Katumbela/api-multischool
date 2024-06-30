import { Sequelize, DataTypes, Model } from 'sequelize';

interface StudentAttributes {
  id: number;
  adhesionNumber: string;
  registrationNumber: string;
  studentName: string;
  class: string;
  shift: string;
  phoneNumber: string;
  course: string;
  identificationNumber: string;
  registrationYear: number;
  school: string;
  password: string; // Adicionando a propriedade password
}

export class Student extends Model<StudentAttributes> implements StudentAttributes {
  public id!: number;
  public adhesionNumber!: string;
  public registrationNumber!: string;
  public studentName!: string;
  public class!: string;
  public shift!: string;
  public phoneNumber!: string;
  public course!: string;
  public identificationNumber!: string;
  public registrationYear!: number;
  public school!: string;
  public password!: string; // Adicionando a propriedade password
}

export const StudentFactory = (sequelize: Sequelize, dataTypes: typeof DataTypes): typeof Student => {
  Student.init({
    id: {
      type: dataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    adhesionNumber: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    registrationNumber: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    studentName: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    class: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    shift: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    phoneNumber: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    course: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    identificationNumber: {
      type: dataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    registrationYear: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    school: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING, // Definindo o tipo para string
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Student',
     
  });

  return Student;
};
