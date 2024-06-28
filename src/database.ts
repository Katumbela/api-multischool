import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Carregar as variáveis de ambiente do arquivo .env
dotenv.config();

export const connection = mysql.createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    //port: process.env.PORT,
});

// Testar a conexão com o banco de dados
connection.getConnection()
    .then(() => {
        console.log('Conectado ao banco de dados');
    })
    .catch(err => {
        console.error('Erro ao conectar ao banco de dados:', err);
    });
