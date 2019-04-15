const express = require("express");
const router = express.Router();

router.get("/my/fav", (req, res) => {
    res.render("my_fav.html", {
        auth : {result : 0},
        status : {index : 1},
        topics : [{id:1},{id:2},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3}]
    });
});

module.exports = router;