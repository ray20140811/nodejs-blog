const serverHandle = (req, res) => {
    // 設置返回格式 JSON
    res.setHeader('Content-type', 'application/json')

    const resData = {
        name: '雙越100',
        site: 'imooc',
        env: process.evn.NODE_ENV
    } 

    res.end(
        JSON.stringify(resData)
    )
}

module.exports = serverHandle