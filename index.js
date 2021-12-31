const express = require('express');
const app = express();
const router = require('./router/routes')
app.use(router);
app.listen(8000,function(){
    console.log('listening on port 8000')
})