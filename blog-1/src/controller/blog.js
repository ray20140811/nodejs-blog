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

module.exports = { 
    getList,
    getDetail 
}