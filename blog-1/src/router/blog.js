const { getList, getDetail, newBlog, updateBlog, delBlog } = require('../controller/blog')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleBlogRouter = (req, res) => {
    const method = req.method
    // const url = req.url
    // const path = url.split('?')[0]
    const id = req.query.id

    // 獲取博客列表
    if(method === 'GET' && req.path === '/api/blog/list') {
        // return {
        //     msg: '這是獲取博客列表的接口'
        // }
        const author = req.query.author || ''
        const keyword = req.query.keyword || ''
        // const listData = getList(author, keyword)
        // return new SuccessModel(listData)
        const result = getList(author, keyword)
        return result.then(listData => {
            return new SuccessModel(listData)
        })
    }

    // 獲取博客詳情
    if(method === 'GET' && req.path === '/api/blog/detail') {
        // const id = req.query.id 
        const detailData = getDetail(id)
        return new SuccessModel(detailData)
    }

    // 新建一篇博客
    if(method === 'POST' && req.path === '/api/blog/new') {
        // return {
        //     msg: '這是新建博客的接口'
        // }
        const blogData = req.body
        const data = newBlog(req.body)
        return new SuccessModel(data)
    }

    // 更新一篇博客
    if(method === 'POST' && req.path === '/api/blog/update') {
        // return {
        //     msg: '這是更新博客的接口'
        // }
        const result = updateBlog(id, req.body)
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('更新博客失敗')
        }
    }

    // 刪除一篇博客
    if(method === 'POST' && req.path === '/api/blog/delete') {
        // return {
        //     msg: '這是刪除博客的接口'
        // }
        const result = delBlog(id)
        if (result) {
            return new SuccessModel()
        } else {
            return new ErrorModel('刪除博客失敗')
        }
    }
}

module.exports = handleBlogRouter