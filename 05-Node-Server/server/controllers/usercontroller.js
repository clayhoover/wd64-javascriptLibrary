var express = require('express')
var router = express.Router()     //1
var sequelize = require('../db');
var User = sequelize.import('../models/user');
var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const { beforeFindAfterExpandIncludeAll } = require('../db');

/*****
 * Create User Endpoint: Starter**
 ****/

 //2
 router.post('/createuser', function (req, res) {

    //var username = 'The Dude';
    //var pass = 'therugtiedtheroomtogether';       //3

    var username = req.body.user.username;
    var password = req.body.user.password;

    User.create({
        username: username,
        passwordhash: bcrypt.hashSync(pass, 10)

    }).then(
        //function message(){
            //res.send('I hate The Eagles, man');

        function createSuccess(user) {
            //1         //2         //3             //4             //5
            var token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: 60*60*24});

            res.json({
                user: user,
                message: 'created'   //1
                sessionToken: token  //6
            });
        },
        function createError(err) {
            res.send(500, err.message);
        }
    );
 });

 router.post('/signin', function(req,res){
           //1       //2       //3
    User.findOne( { where: { username: req.body.user.username}}).then(

        //5
        function(user) {
            if (user) {
                    //2                 //3                     //4                 //5
                bcrypt.compare(req.body.user.password, user.passwordhash, function(err, matches) {
                   if (matches) {
                       var token = jwt.sign({id: user.id}, process.send.JWT_SECRET, {expiresIn: 60*60*24 });
                       res.json({
                           user: user,
                           message: "successfully authenticated",
                           sessionToken: token
                       });
                    } else {
                        res.status(502).send({ error: "you failed, yo"});
                    }
                });
            } else {  //7
                res.status(500).send({error: "failed to authenticate"});   //6
            }
        },
        function (err) {
            res.status(501).send({error: "you failed, yo"});
        }
    );
 });

 module.exports = router;