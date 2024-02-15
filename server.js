const http = require('http')
const server = http.createServer((req,res)=>{
    console.log(req.url,req.method)

    res.setHeader('content-Type','text/plain')
res.write('Hello everyone')
res.end()

})
server.listen(3000,'localhost',()=>{
    console.log('Listening to the request on port 3000')
})