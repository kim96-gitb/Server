let  mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host:'database-1.c3sxfyepvlug.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'wlsghks9'


}
);

connection.query('select * from Memo',
function(error,results,fields){
    console.log(results)
})
connection.end()