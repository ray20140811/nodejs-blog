const handleBlogRouter = (req, res) => {
    const method = req.method
    const url = req.url
    const path = url.split('?')[0]

    // 獲取博客列表
    if(method === 'GET' && path === '/api/blog/list') {
        return {
            msg: '這是獲取博客列表的接口'
        }
    }

    // 獲取博客詳情
    if(method === 'GET' && path === '/api/blog/detail') {
        return {
            msg: '這是獲取博客詳情的接口'
        }
    }

    // 新建一篇博客
    if(method === 'POST' && path === '/api/blog/new') {
        return {
            msg: '這是新建博客的接口'
        }
    }

    // 更新一篇博客
    if(method === 'POST' && path === '/api/blog/update') {
        return {
            msg: '這是更新博客的接口'
        }
    }

    // 刪除一篇博客
    if(method === 'POST' && path === '/api/blog/delete') {
        return {
            msg: '這是刪除博客的接口'
        }
    }
}

module.exports = handleBlogRouter