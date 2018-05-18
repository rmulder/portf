const express = require("express");
const app = express();

app.get('*',function(req,res)
{
    res.end("Hello world !");
});

app.listen(8080,function()
{
     console.log("Running at PORT 8080");
});
