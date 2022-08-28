const express = require('express');
const mongoose = require('mongoose');
const routes = express.Router();
const adminschema = require('../models/admin.js')
const userschema = require('../models/user.js')
routes.get("/:id", (req, res) => {
    userschema.findById(req.params.id).exec().
        then(result => {
            res.status(200).json(result);
        }).
        catch(err => {
            res.status(503).json({
                error: err
            });
        });
});

routes.get("/", (req, res) => {
    userschema.find().exec().
        then(result => {
            res.status(200).json(result);
        }).catch(err => {
            res.status(504).json({
                error: err
            })
        });
});

routes.post('/signup', (req, res, next) => {
    const newadmin = new adminschema({
        _id: new mongoose.Types.ObjectId(),
        email: req.body.email,
        password: req.body.password
    });
    console.log(newadmin);
    newadmin.save().
        then(result => {
            console.log(result);
            res.status(200).json({
                message: "new admin created",
                newadmin: result
            });
        }).
        catch(err => {
            console.log(newadmin);
            res.status(502).json({
                error: err
            });
        });
});

module.exports = routes;