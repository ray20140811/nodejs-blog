const { loginCheck } = require('../controller/user')
const { SuccessModel, ErrorModel } = require('../model/resModel')

const handleUserRouter = (req, res) => {
    const method = req.method
    // const url = req.url
    // const path = url.split('?')[0]

    if(method === 'POST' && req.path === '/api/user/login') {
        // return {
        //     msg: '這是登錄的接口'
        // }

        const { username, password } = req.body
        const result = loginCheck(username, password)
        if (result) {
            return new SuccessModel()
        }
        return new ErrorModel('登錄失敗')
    }
}

module.exports = handleUserRouter