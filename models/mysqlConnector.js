// Load module
var mysql = require('mysql');
// Initialize pool
var pool      =    mysql.createPool({
    host     : 'sql2.freemysqlhosting.net',
    user     : 'sql2226375',
   	password : 'dT1!lD3%',
    database : 'sql2226375',
    debug    :  false
});
module.exports = pool;