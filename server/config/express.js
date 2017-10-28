var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');
var router = express.Router();
const passport = require('passport');

// Conexión a la base de datos
//mongoose.connect('mongodb://pro:foodie@ds040027.mlab.com:40027/foodie');

// Configuraciónb necesaria para la REST API


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

//Routes
module.exports = function() {

    var app = express();

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

    app.use(passport.initialize());
    app.use(passport.session());


    const usrController = require('../app/controllers/user.server.controller.js');
    app.route('/users/signup').post(usrController.signup);
    app.route('/users/signin').post(usrController.signin);

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

        //Codigo para buscar todo el menu en la base de datos
        restaurantModel.find({type: req.params.type}, function(err, restaurants) {
            if (err)
                res.send(err);

            res.json(restaurants);
        });
    });

    app.get('/api/menu/type/:restaurant', function(req, res) {

        console.log("Buscando menu del restaurante:" + req.params.restaurant);

        //Codigo para buscar todo el menu en la base de datos
        restaurantModel.findOne({name: req.params.restaurant}, function(err, menuOptions) {
            if (err)
                res.send(err);

            res.json(menuOptions.options);
        });
    });

    app.get('/api/menu/type/:restaurant/:option', function(req, res) {

        console.log("Buscando menu segun la opcion: " + req.params.option);

        //Codigo para buscar todo el menu en la base de datos
        menuItemModel.find({restaurant: req.params.restaurant, type: req.params.option}, function(err, menuItems) {
            if (err)
                res.send(err);

            res.json(menuItems);
        });
    });

    app.post('/api/user/cart', function(req, res) {
    var userModel = require('mongoose').model('User');
        userModel.findOne({_id: req.body.userID}, function(err, user) {
            cart = user.cart;
            if (cart.indexOf(req.body.itemID) < 0) {
                cart.push(req.body.itemID);
                user.cart = cart;
                user.save(function(err) {
                    if (err) console.log(err);
                })
            }
            console.log(user);
        });
    });

    app.get('/api/user/cart/:userID', function(req, res) {
    var userModel = require('mongoose').model('User');
        userModel.findById(req.params.userID, function(err, user) {
            if (err)
                res.send(err);

            res.json(user.cart);
        });
    });

    return app;
}
