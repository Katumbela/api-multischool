import mysql from 'mysql2/promise';

export const connection = mysql.createPool({
  host: 'sql300.infinityfree.com',
  user: 'if0_36808806',
  password: 'skrYWRqqHzQ',
  database: 'if0_36808806_db_multischool_app',
});
