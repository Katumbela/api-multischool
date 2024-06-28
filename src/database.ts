import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
  host: 'localhost',
  user: 'seu_usuario',
  password: 'sua_senha',
  database: 'nome_do_seu_banco',
});
