const mysql =  require('mysql')

// 創建鏈接對象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Mysql_2018',
    port: '3306',
    database: 'myblog'
})

// 開始連接
con.connect()

// 執行 sql 語句
// const sql = 'select id, username from users;'
// const sql = `update users set realname = '李四2' where username='lisi';`
const sql = `INSERT INTO blogs (title, content, createtime, author) VALUES ('標題C','內容C',1690088710150, 'zhangsan');`
con.query(sql, (err, result) => {
    if (err) {
        console.error(err)
        return 
    }
    console.log(result)
})

// 關閉連接
con.end()
