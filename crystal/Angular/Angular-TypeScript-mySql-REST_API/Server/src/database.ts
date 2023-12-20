import mysql from "promise-mysql";
import keys from './keys'

const pool = mysql.createPool(keys.database);

pool.then(connection => {
    connection.release();
    console.log('Conexión exitosa a la base de datos');
}).catch(error => {
    console.error('Error de conexión a la base de datos:', error);
});

export default pool;
