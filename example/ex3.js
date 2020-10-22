let mysql = require("mysql");

let connection = mysql.createConnection({
  host: "database-1.c3sxfyepvlug.ap-northeast-2.rds.amazonaws.com",
  user: "node_user",
  database: "my_test",
  password: "wlsghks9",
});
// 1
// connection.query('select concat(author_fname,author_lname) from books;'
// ,function(error,res,field){
//     console.log(res)
// })

//2
// connection.query('select concat(substring(title,1,10),"...") from books;',
// function(error,res,field){
//     console.log(res)
// })

// 3
// connection.query('select concat(title ," in ", released_year) from books;'
// ,function(error,res,field){
//     console.log(res)
// })

// 4
// connection.query('select title , char_length(title) as charcount from books;',
// function(error,res){
//     console.log(res)
// })

//5
// let insert_query = 'insert into books (title,author_fname,author_lname,released_year,stock_quantity,pages)\
// values("10% Happier","Dan","Harris",2014,29,256),\
// ("fake_book","Freida","Harris",2001,287,428),\
// ("Lincoln In The Bardo","George", "Saunders",2017,1000,367)'

// connection.query(insert_query,function(error,res){
//     console.log(res)
// })

//6
// connection.query('select title , released_year from books order by released_year desc limit 5;',
// function(error,res){
//     console.log(res)
// })

//7
// connection.query('select title , pages from books order by pages desc limit 1;',
// function(error,res){
//     console.log(res)
// })

//8
// connection.query('select * from books where title like "%the%";',
// function(error,res){
//     console.log(res)
// })

//9
// connection.query('select released_year , count(title) from books group by released_year;',
// function(error,res){
//     console.log(res)
// })

//10 dd
connection.query(
  "select released_year , count(title) , avg(round(pages,3)) as avgcount from books group by released_year;",
  function (error, res) {
    for (
      let i = 0;
      i < res.length;
      i++ // 루프을 돌면 보기 편함
    )
      console.log(res[i].released_year);
  }
);
