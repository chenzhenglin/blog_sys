const express = require("express");
const router = express.Router();

router.get("/register", function (req, res) {
    res.render("register.html");
});

module.exports = router;