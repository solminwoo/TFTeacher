const mongoose = require('mongoose')
const MongModels = require('../models/model.js');
const User = MongModels.User;

module.exports = {
    findAll: function (req, res) {
        User.findAll({})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    findOne: function (req, res) {
        User.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    delete: function (req, res) {
        User.findOneAndDelete({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    create: function (req, res) {
        User.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err))
    }
}

