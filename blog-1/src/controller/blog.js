const getList = (author, keyword) => {
    // 先返回假數據 (格式是正確的)
    return [
        {
            id: 1,
            title: '標題A',
            content: '內容A',
            createTime: 1546610491112,
            author: 'zhangsan'
        },
        {
            id: 2,
            title: '標題B',
            content: '內容B',
            createTime: 1546610524373,
            author: 'lisi'            
        }
    ]
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

module.exports = { 
    getList,
    getDetail,
    newBlog 
}