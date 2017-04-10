const express = require('express');
const app = express();

app.use('/',function (req,res) {
   res.send('hello world');
});


const server = app.listen(3000, function () {
    const port = server.address().port;
    console.log('listening on port '+port);
});
