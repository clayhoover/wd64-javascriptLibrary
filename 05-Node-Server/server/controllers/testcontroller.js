var express = require('express'); //1
const sequelize = require('sequelize')
var router = express.Router(); //2
var TestModel = require('../models/test'); // 1

/*

router.get('/', function (req,res){

    res.send('Hey!!! This is a test route!');
});

router.get('/about', function(req, res) {
    res.send('This is an about route'); //? 4
});


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


*/

/*
********
 Controller Method #1: Simple Response
********
*/

        //1     //2
 router.post('/one', function(req, res) {
     //3
     res.send("Got a post request.")
 });


/*
*****
 Controller Method #2: Persisting Data
*****
*/

router.post('/two', function (req, res) {
    let testData = "Test data for endpoint two"; 

    TestModel.create({
        testdata: testData
    })
    .then(dataFromDatabase => {
        res.send("Test two went through!")
    })
});

/*
******
 Controller Method #3: req.body
******
*/

router.post('/three', function (req, res) {
                    //1
    var testData = req.body.testdata.item;

    TestModel
    .create({ //2
    testdata: testData
})
    res.send("Test three went through!")
    console.log("Test three went through!")
});


// STEP 4 - Use this with Postman
router.post('/four', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(  //1
        function message() { //2
        res.send("Test 4 went through!");
    }
    );
});


/*
*****
 Route 5: Return Data in a Promise
*****
*/

router.post('/five', function (req, res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then (      //1
        function message(data) {
            res.send(data);   //2
        }
        );
});

/*
****
 Route 6: Return response as JSON
****
*/

router.post('/six', function (req,res) {
    var testData = req.body.testdata.item;
    TestModel
    .create({
        testdata: testData
    })
    .then(
        function message (testdata) {
            res.json({ //1
            testdata: testdata  //2
        });
        }
    );
});


/*
****
 Route 7: Handle Errors
****
*/

router.post('/seven', function (req, res) {
    var testData = req.body.testdata.item;

    TestModel
    .create({
        testdata: testData
    })
    .then(
        function createSuccess(testdata) {
            res.json({
                testdata: testdata
            });
        },
        function createError(err) {  //1
            res.send(500, err.message);
        }
    );
});

module.exports = router;