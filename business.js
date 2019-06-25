var express=require('express');
var app=express();
var businessController=function(req,res)
{
var business=[
{id:1,name:"user",description:"user details"},
{id:2,name:"manager",description:"manager details"},
{id:3,name:"employee",description:"employee details"},
{id:4,name:"registeredcustomer",description:"registeredcustomer"},
{id:4,name:"stock",description:"stock details"}

]
res.send(business);
};

app.get('/business',businessController);
var server=app.listen(2600,function(){
var host=server.address().host;
var port=server.address().port;
console.log("server is listening on port 2600",host,port);

})