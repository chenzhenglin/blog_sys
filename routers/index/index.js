const express = require("express");
const router = express.Router();

router.get("/",(req, res) => {
    renderIndex(res);
});

router.get("/index",(req, res) => {
    renderIndex(res);
});

function renderIndex(res) {
    res.render("index.html", {
        auth : {result : 0},
        topics : [{id:1},{id:2},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3},{id:3}]
    });
}

module.exports = router;
