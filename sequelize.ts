import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'mysql', // Exemplo: MySQL
  username: "sql8716902",
  password: "zIApsI1ZiE",
  database: "sql8716902",
  host: "sql8.freesqldatabase.com", 
});

export default sequelize;
