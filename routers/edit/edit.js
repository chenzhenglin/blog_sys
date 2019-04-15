const express = require("express");
const router = express.Router();

/*首页*/
router.get("/", function (req, res) {
    res.render("index.html", {
        topics : [{id:1},{id:2},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3}]
    });
});

module.exports = router;
