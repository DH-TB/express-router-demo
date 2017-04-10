let express = require('express');
let app = express();

//在根路由上任何HTTP请求进行响应
app.use('/',function (req,res) {
   res.send('hello world');
});

//在根路由上对GET请求进行响应，显示内容
app.get('/', function (req, res) {
    res.send('get request!');
});

//在根路由上对POST请求进行响应,如果只输入url,则显示Cannot GET /
app.post('/', function (req, res) {
    res.send('post request!');
});

app.use('/router',require('./route/router'));

const server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('listening on port '+port);
});
