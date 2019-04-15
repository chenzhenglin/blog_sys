const express = require("express");
const User = require("../models/user");
const router = express.Router();

router.post("/login", function (req, res) {
    console.log("login");
    let body = req.body;
    User.findOne({
        username : body.username,
        password : body.password
    }, function (err, user) {
        if (err) {
           return res.status(500).json({
               error_code : 500,
               message : err.message
           });
        }

        if(!user){
            return res.status(200).json({
                error_code : 200,
                message: "username or password is invalid."
            })
        }

        res.status(200).json({
            error_code : 0,
            message : "OK"
        });
    });
});

router.post("/register", function (req, res) {

});

router.post("/my/avatar", function (req, res) {
    console.log(req.files);
    res.send("{result : success}");
});


module.exports = router;
