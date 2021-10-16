module.exports = (app) => {
    app.use('/', require('./modules/healthcheck'));
    app.use('/login', require('./modules/login'));
    app.use('/income', require('./modules/income'));
 }