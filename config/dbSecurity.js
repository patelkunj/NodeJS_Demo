require('dotenv').config();
const mysql = require('mysql2');
const mysqlPromise = require('mysql2/promise');
const crypto = require("crypto");

const clientResponse = require("../config/responseFile");
const {
    json
} = require('body-parser');

const privateKey = process.env.privateKey;

const self = module.exports = {

    dbConnection: () => {
        return mysql.createPool({
            host: process.env.db_host,
            user: process.env.db_User,
            database: process.env.db_Database,
            password: process.env.db_Password,
            multipleStatements: true
        });
    },

    asyncDbConnection: async () => {
        return await mysqlPromise.createPool({
            host: process.env.db_host,
            user: process.env.db_User,
            database: process.env.db_Database,
            password: process.env.db_Password,
            multipleStatements: true
        });
    },

    asyncResult: async (str) => {
        const pool = await self.asyncDbConnection();
        const connection = await pool.getConnection();
        try {
            let Data = await connection.query(str);
            return Data;
        } catch (error) {
            console.log(error);
        } finally {
            connection.release();
        }
    },
};