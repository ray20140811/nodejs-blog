const { exec } = require('../db/mysql')

const getList = (author, keyword) => {
    let sql = `select * from blogs where 1=1 `
    if (author) {
        sql += `and author='${author}' `
    }
    if (keyword) {
        sql += `and title like '%${keyword}%' `
    }
    sql += `order by createtime desc;`

    // 返回 promise
    return exec(sql)
}

const getDetail = (id) => {
    // 先返回假數據
    return  {
        id: 1,
        title: '標題A',
        content: '內容A',
        createTime: 1546610491112,
        author: 'zhangsan'
    }
}

const newBlog = (blogData = {}) => {
    // blogData 是一個博客對象, 包含 title, content 屬性
    console.log('newBlog blogData... ',blogData)

    return {
        id: 3   // 表示新建博客, 插入到數據表裡面的 id
    } 
}

const updateBlog = (id, blogData = {}) => {
    // id 就是要更新博客的 id
    // blogData 是一個博客對象, 包含 title, content 屬性
    console.log('updateBlog blogData', id, blogData)

    return true
}

const delBlog = (id) => {
    // id 就是要刪除博客的 id

    return true
}

module.exports = { 
    getList,
    getDetail,
    newBlog,
    updateBlog,
    delBlog 
}