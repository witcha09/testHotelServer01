const dbConnection = require("../config/db.config");

var postgres = require('pg');

var dbconfig = {
    host: dbConnection.HOST,
    user: dbConnection.USER,
    port: dbConnection.PORT,
    password: dbConnection.PASSWORD,
    database: dbConnection.DATABASE,

}

var pool = new postgres.Pool(dbconfig);

module.exports = pool;