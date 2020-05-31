import mysql from 'mysql';
const db = mysql.createPool({
    host : '192.168.1.141',
    port : '3307',
    user : 'codeforest',
    password : 'codeforest',
    database : 'codeforest'
});


var getConnection = function(callback){
    db.getConnection(function(err,connection){
        callback(err,connection);
    });
  };

module.exports = getConnection;