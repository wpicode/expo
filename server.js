var express = require('express');
var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);



app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});
app.use(express.static('public'));

http.listen(3000, function(){
});


io.on('connection', function(socket){

  io.emit('load', data);

  socket.on('search', function(msg){
    var param = msg[0];
    var term = msg[1];
    var result = {}; var i =0;
    for (key in data) {
        var supplier = data[key]['supplier'];
        var product = data[key]['product'];
        var price = data[key]['price'];
        var paramVal = data[key][param];
        if(paramVal.match(term) !=null){
        	     result[i]={
        	    	'supplier' : supplier,
        	    	'product' : product,
        	    	'price' :price
        	    };
        	     i++;
        	 }
	}
    io.emit('result', result);
  });

});

var data =   {
		  1 : {
		  'supplier':'New Co Ltd',
		  'product':  'Small wongle',
		  'price' : 5
		  },
		  2 : {
		  'supplier':'New Co Ltd',
		  'product':  'Large wongle',
		  'price' : 8
		  },
		  3 : {
		  'supplier':'New Co Ltd',
		  'product':  'Super wongle',
		  'price' : 12
		  },
		  4 : {
		  'supplier':'Old Co Ltd',
		  'product':  'Mini wongle',
		  'price' : 4
		  },
		  5 : {
		  'supplier':'Old Co Ltd',
		  'product':  'Small wongle',
		  'price' : 6
		  },
		  6 : {
		  'supplier':'Old Co Ltd',
		  'product':  'Large wongle',
		  'price' : 9
		  },
		  7 : {
		  'supplier':'Old Co Ltd',
		  'product':  'Super wongle',
		  'price' : 13
		  }
}