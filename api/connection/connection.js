const pg = require('pg');
const pgClient=pg.Client;


const client = new pgClient({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "NewDb"
});


const movieClient = new pgClient({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "123456",
    database: "postgres"
});


module.exports = {client, movieClient};