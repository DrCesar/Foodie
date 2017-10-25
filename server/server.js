/*

    Servidor para el proyecto Foodie

*/

<<<<<<< refs/remotes/origin/master
// Se exportan los modulos necesarios para el servidor y la conexion a la base de datos
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

// Conexión a la base de datos
mongoose.connect('mongodb://pro:foodie@ds040027.mlab.com:40027/foodie');

// Configuraciónb necesaria para la REST API
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(function(req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header('Access-Control-Allow-Methods', 'DELETE, PUT, GET, POST');
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
});

//---Modelos---
var foodTypeSchema = new mongoose.Schema({
    name: String,
    value: String},
    { collection: "foodType"
});

var restaurantSchema = new mongoose.Schema({
    name: String,
    type: String,
    options: [String]},
    { collection: "restaurant"
});

var menuItemSchema = new mongoose.Schema({
    name: String,
    picture: String,
    price: Number,
    restaurant: String,
    type: String},
    { collection: "menu"
});


var menuItemModel = mongoose.model('MenuItem', menuItemSchema);
var restaurantModel = mongoose.model("Restaurant", restaurantSchema);
var foodTypeModel = mongoose.model("foodType", foodTypeSchema);

const usrController = require('./app/controllers/user.server.controller.js');

//Routes

app.route('/users').post(usrController.create);

app.get('/api/menu', function(req, res) {

    console.log("Nombre de todos los tipos de comida.");

    //Se buscan los tipos de comida
    foodTypeModel.find(function(err, foodTypes) {
        if (err)
            res.send(err);

        res.json(foodTypes);
    });
});

app.get('/api/menu/:type', function(req, res) {

    console.log("Buscando restaurantes segun el tipo: " + req.params.type);
=======

const configureExpress = require('./config/express');
const configureMongoose = require('./config/mongoose');


const db = configureMongoose();
const app = configureExpress();
>>>>>>> Se cambia los servicios



//Se crea el servidor
app.listen(8080, function(){
	console.log("Started on PORT 8080");
});

module.export = app;