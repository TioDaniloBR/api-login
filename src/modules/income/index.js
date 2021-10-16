'use strict'

const { Router } = require('express');
const routes = Router();

const loginController = require('../login/controllers/login.controller');
const incomeController = require('./controllers/income.controller');

routes.post('/create', loginController.authorized, async(req, res ,next)=>{
    res.send(await incomeController.create(req));
});
routes.get('/find', loginController.authorized, async(req, res, next) => {
    res.send(await incomeController.findAll(req));
});
routes.put('/update', loginController.authorized, async(req, res, next)=>{
    res.send(await incomeController.update(req));
});
routes.delete('/delete', loginController.authorized, async(req, res, next)=>{
    res.send(await incomeController.delete(req));
})

module.exports = routes;