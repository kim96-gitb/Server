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
connection.query('select article , color from shirts limit 20;',
                        function(error,result,field){
                            console.log(result)
                        })

let insert_add = 'insert into shirts (article, color, shirt_size, last_worn) values ("polo shirt","Purple","M","50");'
connection.query(insert_add,function(error,result){
    console.log(result)
})
connection.end()