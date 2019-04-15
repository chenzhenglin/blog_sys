const express = require("express");
const router = express.Router();

router.get("/my/profile", (req, res) => {
    res.render("my_profile.html", {
        auth : {result : 0},
        topics : [{id:1},{id:2},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3}]
    });
});

module.exports = router;