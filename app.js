const express = require("express");
const bodyPaser = require("body-parser");
const path = require("path");

const multer  = require('multer');
const upload = multer({ dest: './uploads/' });

/*页面跳转路由*/
const pageRouter = require("./routers/page");
/*数据请求路由*/
const apiRouter = require("./routers/api");

const app = express();

/*配置文件类型POST 中间件*/
app.use(upload.any());

app.engine("html", require("express-art-template"));
app.use("/node_modules/", express.static(path.join(__dirname, "./node_modules/")));
app.use("/views/", express.static(path.join(__dirname, "./views/")));
app.use("/public/", express.static(path.join(__dirname, "./public/")));

app.use(bodyPaser.urlencoded({ extended : false }));
app.use(bodyPaser.json());

app.use(pageRouter);
app.use(apiRouter);

app.listen(8080,()=>{
    console.log("running...");
});
