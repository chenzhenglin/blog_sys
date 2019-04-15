/**
 * 页面跳转路由
 * @type {createApplication}
 */

const express = require("express");
const router = express.Router();

/*首页页面路由配置*/
router.use(require("./index/index"));

/*写文章页面路由配置*/
router.use(require("./edit/edit"));

/*登录页面路由配置*/
router.use(require("./login/login"));

/*注册页面路由配置*/
router.use(require("./register/register"));

/*个人中心页面路由配置*/
router.use(require("./my/profile"));
router.use(require("./my/blog"));
router.use(require("./my/fans"));
router.use(require("./my/fav"));
router.use(require("./my/focus"));
router.use(require("./my/main"));

module.exports = router;
