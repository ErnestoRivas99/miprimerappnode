const mysql = require('mysql');

module.exports = () => {
    return mysql.createConnection({
  host: 'sql3.freemysqlhosting.net',
        user: 'sql3335277',
        password: 'fUREQ4GSk8',
        database: 'sql3335277'

    });