import {Pool, PoolClient} from 'pg';
import data from './data';

const pool = new Pool({
    host: data.database.host,
    user: data.database.user,
    password: data.database.password,
    database: data.database.database,
    port: 5432,
});

pool.connect()
.then((client: PoolClient) => {
    console.log('Conexión exitosa a PostgreSQL');
    client.release();
})
.catch((err: PoolClient) => {
    console.error('Error al conectar a PostgreSQL:', err);
});

export default pool;