const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/test",{ useNewUrlParser: true });

const Schema = mongoose.Schema;

const userSchema = new Schema({
    username : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require: true
    },
    created_time : {
        type : Date,
        default : new Date
    },
    updated_time : {
        type : Date,
        default: new Date
    },
    avatar : {
        type : String,
        default : "/public/img/avatar-default.png"
    },
    gender : {
        type : Number,
        enum : [-1,0,1],
        default : -1
    },
    birthday : {
        type : Date
    },
    status : {
        type : Number,
        // 0 没有权限限制
        // 1 不可以评论
        // 2 不可以登录
        enum : [0,1,2],
        default : 0
    }
});

module.exports = mongoose.model('User', userSchema);

