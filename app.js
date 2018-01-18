var express = require('express');

var app = express();

var port = 5000;

app.use(express.static('public'));
app.use(express.static('src/views'));



//Listen on the port
app.listen(port, function(err){
	
	console.log("Server is running on port " + port);
	
});