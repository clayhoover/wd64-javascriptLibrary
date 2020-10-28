require('dotenv').config();

var express = require('express'); //1
var app = express(); //2
var test = require('./controllers/testcontroller')  //? 1
var user = require('./controllers/usercontroller')

//! 1
var sequelize = require('./db');

app.use(express.json()); //* 1


//3        //4
app.listen(3000, function(){
    console.log('App is listening on 3000.') //5
});

// app.use('/api/test', function(req, res){
//     res.send("This is data from the /api/test/ endpoint. It's from the server.");
// });

//! 2
sequelize.sync(); // tip: pass in {force: true} for resetting tables


        //? 2            //3
app.use('/test', test)

app.use('/api/user', user);  //2

/*
sequelize.authenticate()
	.then(async () => {
		console.log('DB CONNECTED');
		return sequelize.sync();
	})
	.catch(() => {
		console.log('Server Crashed');
	})
*/

app.listen(3000, function() {
	console.log('App listening on port 3000');
});

