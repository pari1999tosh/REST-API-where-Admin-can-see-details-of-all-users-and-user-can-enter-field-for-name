const express = require('express');
const userroute = require('./api/routes/user.js');
//const passwd = "node-shop-dnda39353";
const adminroute = require('./api/routes/admin.js');
const morgan = require("morgan");
const bodyparser = require('body-parser');
const mongoose = require('mongoose');
//mongoose.connect('mongodb+srv://node-shop:' + passwd + '@node-rest-shop.1vb9hml.mongodb.net/?retryWrites=true&w=majority');
const app = express();

const connect = async () => {
    try {
        const result = await mongoose.connect('mongodb+srv://node-shop:' + 'node-shop-dnda39353' + '@node-rest-shop.1vb9hml.mongodb.net/?retryWrites=true&w=majority');
        //console.log(result);
    } catch (err) {
        console.log("could not connect to databse");
        console.log(err);
    }
}

connect();


app.use(morgan('dev'));
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());
app.use("/users", userroute);
app.use("/admin", adminroute);

app.use((req, res, next) => {
    const error = new Error("Page not found");
    error.status = 404;
    next(error);
});
app.use((error, req, res) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }

    });
});

module.exports = app;