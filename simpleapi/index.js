const cors = require('cors');
const express = require('express');


const app = express();
app.use(cors());
app.options('*', cors());


const port = 8085;

// define root controller (GET)
app.get('/', (req, res, next) => {
	res.send('Karens api...');
});

//define GET controller for 
app.get('/Suma', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var suma = (x+y);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Resta', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var resta = (x-y);
	var objResult = {
		resta:resta
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Multi', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var mult = (x*y);
	var objResult = {
		mult:mult
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Division', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var div = (x/y);
	var objResult = {
		div:div
	}
	res.send(objResult);

});

//define GET controller for 
app.get('/Pow', (req,res,next) => {
	var x = parseInt(req.query.x);
	var y = parseInt(req.query.y);
	
	console.log(x);
	console.log(y);
	
	var suma = Math.pow(x,y);
	var objResult = {
		suma:suma
	}
	res.send(objResult);

});



app.listen(port, () => 
	console.log('listening on port ' + port)
);
