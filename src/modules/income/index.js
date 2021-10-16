'use strict'

const { Router } = require('express');
const routes = Router();

const incomeController = require('./controllers/income.controller');

routes.post('/create', async(req, res ,next)=>{
    res.send(await incomeController.create(req));
});
routes.get('/find', async(req, res, next) => {
    res.send(await incomeController.findAll(req));
});
routes.put('/update', async(req, res, next)=>{
    res.send(await incomeController.update(req));
});
routes.delete('/delete', async(req, res, next)=>{
    res.send(await incomeController.delete(req));
})

module.exports = routes;