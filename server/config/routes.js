const controller = require('../controllers/controller.js');
const path = require('path')

module.exports = function (app) {
    app.get('/api/users', (req, res) =>{
        controller.findAll(req, res);
    }),
    app.get('/api/users/:id', (req, res) =>{
        controller.findOne(req, res);
    }),
    app.post('/api/users/create', (req, res) =>{
        controller.create(req, res);
    }),
    app.delete('/api/users/:id', (req, res) =>{
        controller.deleteOne(req, res);
    }),


    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"))
    })
}