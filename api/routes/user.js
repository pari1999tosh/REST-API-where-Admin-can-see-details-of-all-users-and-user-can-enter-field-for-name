const express = require('express');
const routes = express.Router();
const usermodel = require('../models/user.js');
const mongoose = require('mongoose');

routes.post("/", (req, res) => {
    const newuser = new usermodel({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        age: req.body.age,
        city: req.body.city,
        phone: req.body.phone,
        email: req.body.email,
        qualification: req.body.qualification

    });

    newuser.save().
        then(result => {
            console.log(result);
            res.status(200).json({
                message: "new object created",
                newproduct: result
            }).catch(err => {
                res.status(503).json({
                    error: err
                });
            });
        });
});

routes.get("/", (req, res) => {
    res.status(404).json({
        message: 'you are not allowed to access the details'
    });
});


module.exports = routes;

