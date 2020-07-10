
let  mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host:'database-1.c3sxfyepvlug.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'wlsghks9'


}
);
// 1
// connection.query('select * from users limit 30;',
//                function(error,res,field){
//                    console.log(res)
//                })

//2 
// connection.query('select * from users order by  created_at asc limit 1;',
// function(errpr,res,field){
//     console.log(res)
// })

//3
// connection.query('select monthname(created_at) as month , count(*) as count from users group by month order by count desc;',
// function(error,res,field){
//     console.log(res)
// })

//4
// connection.query('select email from users where email like "%yahoo%";',
// function(error,res,field){
//     console.log(res)
// })

//5
connection.query('select count(*) as count from users where email like "%yahoo%";',
function(error,res,field){
    console.log(res)
})