'use strict'

const { Router } = require('express');
const routes = Router();

const loginController = require('./controllers/login.controller');

routes.post('/registration', async(req, res ,next)=>{
    res.send(await loginController.registration(req));
    
});

routes.post('/authenticate', async(req, res, next)=>{
    res.send(await loginController.authenticate(req))
});


//apenas exemplo de como usar o authorized
routes.get('/test', loginController.authorized, async (req, res, next) => {
    res.send(await loginController.testAuthorization(req));
});





module.exports = routes;