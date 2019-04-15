const express = require("express");
const router = express.Router();

router.get("/my/focus", (req, res) => {
    res.render("my_focus.html", {
        auth : {result : 0},
        topics : [{id:1},{id:2},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3}]
    });
});

module.exports = router;