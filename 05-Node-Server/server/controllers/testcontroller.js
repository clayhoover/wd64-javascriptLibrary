var express = require('express'); //1
var router = express.Router(); //2
var sequelize = require('../db.js');
var TestModel = sequelize.import('../models/test.js'); //! 1

/*
//3    //4    //5      //6
router.get('/', function (req,res){
    //7
    res.send('Hey!!! This is a test route!');
});

//? 1    //2    //3
router.get('/about', function(req, res) {
    res.send('This is an about route'); //? 4
});

//!
router.get('/contact', function(req, res){
    res.send({user: "kenn", email: "kenn@beastmode.com"});
});

router.get('/projects', function(req, res) {
    res.send(['Project 1', 'Project 2']);
});

router.get('/mycontacts', function(req, res) {
    res.send([
        {user: "quincy", email: "kenn@beastmode.com"},
        {user: "aaron", email: "aaron@beasmode.com"},
        {user: "quincy", email: "quincy@beastmode.com"},
        {user: "tom", email: "tom@beastmode.com"},
    ]);
});

//8

*/

/*
********
! Controller Method #1: Simple Response
********
*/

        //1     //2
 router.post('/one', function(req, res) {
     //3
     res.send("Got a post request.")
 });


/*
*****
! Controller Method #2: Persisting Data
*****
*/

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; //! 2

    TestModel   //! 3
        .create({  //! 4
    //! 6
        testdata: testData  //! 5
    }) .then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});

module.exports = router;