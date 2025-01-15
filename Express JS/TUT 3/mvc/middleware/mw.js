const express = require("express");


const urlencodedMiddleware = express.urlencoded({ extended: false });

const middleware1 = (req, res, next)=>{
    console.log("Middleware 1")
    next()
}

const middleware2 = (req, res, next)=>{
    console.log("Middleware 2")
    next()
}

module.exports = {middleware1, middleware2, urlencodedMiddleware}