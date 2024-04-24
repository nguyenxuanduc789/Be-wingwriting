require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const compression = require('compression');
var cors = require('cors')
const { default: helmet } = require('helmet');
const { default: mongoose } = require('mongoose');
// const { checkOverload } = require('./helpers/check.connect');
// const { pushToLogError } = require('./middlewares');




const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(cors())
//init middlewares
//===================Init middleware======================
app.use(morgan('short'))
//['combined','common','short','tiny','combined'] =>Log Request 
//::1 - - [01/Aug/2023:08:30:59 +0000] "GET / HTTP/1.1" 200 30 "-" "Mozilla/5.0 (Windows NT; Windows NT 10.0; en-US) WindowsPowerShell/5.1.19041.3031"
app.use(helmet())  //  helmet bảo vệ header
app.use(compression())//giảm dữ liệu vận chuyện từ  Server -> Client
//curl http://localhost:3055 --include // include: Xem Header của url

//init db
require('./dbs/init.mongdb');
//const sql = require('./dbs/init.mysql');

//const rabbitmq = require('./library/rabbitMQ/init.rabbitmq');
// require("./dbs/init.redis");

//checkOverload();
//global._rabbitmq = rabbitmq
//global._redis = redis
//global._sql = sql
//init routes
app.use('/', require('./router'))
//handleing error
app.use((req, res, next) => {
    const error = new Error('Not Found')
    error.status = 404
    next(error)
})
app.use((error, req, res, next) => {

    const statusCode = error.status || 500
    const date = Date();
    const paramErrorLogToDev = {
        time: date.time,
        url: req.url,
        method: req.method,
        query_url: req.query,
        token: req.headers['authorization'],
        body: req.body,
        status: 'error',
        code: statusCode,
        error: error.stack,
        message: error.message || 'Internal Sever Error'
    }
    const paramError = {
        status: 'error',
        code: statusCode,
        message: error.message || 'Internal Sever Error'
    }
    if (statusCode == 500) {
        //pushToLogError(paramErrorLogToDev)
    }
    return res.status(statusCode).json(paramError)
})
module.exports = app