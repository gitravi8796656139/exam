var express=require('express');
var app=express();

var ordersController=function(req,res)
{
var order=[
{id:1,name:"super computer",description:"64 bit",unitprice:100000,quantity:2},
{id:2,name:"desktop",description:"64 bit",unitprice:35000,quantity:2},
{id:3,name:"laptop",description:"32 bit",unitprice:50000,quantity:5},
{id:4,name:"tablet",description:"32 bit",unitprice:25000,quantity:3}
]
res.send(order);
};

app.get('/orders',ordersController);

var server=app.listen(2500,function(){
var host=server.address().host;
var port=server.address().port;
console.log("server is listening on port 2500",host,port);

})

