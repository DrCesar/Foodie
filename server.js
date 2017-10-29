

const configureExpress = require('./config/express');
const configureMongoose = require('./config/mongoose');
const configurePassport = require('./config/passport');

const db = configureMongoose();
const app = configureExpress();
const passport = configurePassport();



//Se crea el servidor
app.listen(8080, function(){
	console.log("Started on PORT 8080");
});

module.export = app;