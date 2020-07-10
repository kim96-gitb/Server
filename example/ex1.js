let  mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host:'database-1.c3sxfyepvlug.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'wlsghks9'


}
);

//  첫번째
// connection.query('select article , color from shirts limit 20;',
//                         function(error,result,field){
//                             console.log(result)
//                         })

// 두번째
// let insert_add = 'insert into shirts (article, color, shirt_size, last_worn) values ("polo shirt","Purple","M","50");'
// connection.query(insert_add,function(error,result){
//     console.log(result)
// })

// 세번째 
// connection.query('select * from shirts where shirt_size = "M";',
//                         function(error,result){
//                             for(let i = 0; i < result.length;i++)                        
//                             console.log(result[i].color)
//                         })

// 네번째
// let update_query = 'update shirts set shirt_size = "L" where article = "polo shirt";'
// connection.query(update_query,function(error,res){
//     console.log(res)
// })

// 다섯번째
// let update_query = 'update shirts set last_worn = 0 where last_worn = 15;'
// connection.query(update_query,function(error,res){
//     console.log(res)
// })

//여섯번째
// let update_query = 'update shirts set color = "off white" , shirt_size = "XS" where color = "orange";'
// connection.query(update_query,function(error,res){
//     console.log(res)
// })

// 일곱번째
// let delete_query = 'delete from shirts where last_worn = 200;'
// connection.query(delete_query,function(error,res){
//     console.log(res)
// })

// 8
// let delete_query = 'delete from shirts where article = "tank top";'
// connection.query(delete_query,function(error,res){
//     console.log(res)
// })


connection.end()