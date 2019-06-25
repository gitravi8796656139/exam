var express=require('express');
var app=express();
var entityController=function(req,res)
{
var entity=[
{id:1,name:"user",description:"user details"},
{id:2,name:"manager",description:"manager details"},
{id:3,name:"employee",description:"employee details"},
{id:4,name:"product",description:"product details"}
]
res.send(entity);
};









app.get('/entity',entityController);

var server=app.listen(2500,function(){
var host=server.address().host;
var port=server.address().port;
console.log("server is listening on port 2500",host,port);

})
