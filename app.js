var express = require('express');
var app = express();
var path = require('path');
app.get("/",function(req,res){
    console.log("go there");
    res.sendFile(path.join(__dirname, './page', 'index.html'));
});
app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000,function(){
    console.log("your server running on 3000");
});
