let  mysql = require('mysql')

let connection = mysql.createConnection(
    {
        host:'database-1.c3sxfyepvlug.ap-northeast-2.rds.amazonaws.com',
        user : 'node_user',
        database : 'my_test',
        password : 'wlsghks9'


}
);

// 인설트문 테이블에 데이터 넣는ㄱ ㅓ
// let insert_query = 'insert into Memo (title,comment) \
//                     values ("hello","nice")'

// let insert_query = 'insert into Memo (title,comment) values("hey","hi")'
// connection.query(insert_query,function(error,result){
//     console.log(result)
// })

// connection.query('select count(*) as cnt from Memo',
// function(error,results,fields){
//     console.log(results)
//     console.log(results[0].cnt)
// })

let q_like = "%he%"
connection.query('selcet title from Memo where title like ?;',[q_like,1],
                 function(error,results,field){
                     console.log(results)
                 })



                

connection.end() // 데이터를 호출하고 마지막은 무조건
                  //  닫아주는 코드 필요함