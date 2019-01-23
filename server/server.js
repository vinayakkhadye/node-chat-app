const path      = require('path');
const express   = require('express');
const publicPath= path.join(__dirname,'../public');

var app     = express();
var port    = 3000;

app.use( express.static(publicPath))

app.listen(port,()=>{
    console.log('server listening on port http://localhost:3000')
})

