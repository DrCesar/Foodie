var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const cors = require('cors');
var router = express.Router();
const passport = require('passport');

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

    const orderController = require('../app/controllers/order.server.controller');
    app.route('/api/order').post(orderController.addOrder);
    app.route('/api/order/:restaurant').get(orderController.getOrder);

    //Ruta para obtener los tipos de comida de los restaurantes
    app.get('/api/menu', function(req, res) {

        console.log("Nombre de todos los tipos de comida.");

        //Se buscan los tipos de comida
        foodTypeModel.find(function(err, foodTypes) {
            if (err)
                res.send(err);

            res.json(foodTypes);
        });
    });

    //Ruta que devuelve los restaurantes del tipo pedido
    app.get('/api/menu/:type', function(req, res) {

        console.log("Buscando restaurantes segun el tipo: " + req.params.type);

        //Codigo para buscar todo el menu en la base de datos
        restaurantModel.find({type: req.params.type}, function(err, restaurants) {
            if (err)
                res.send(err);

            res.json(restaurants);
        });
    });

    //Ruta que devuelve los tipos de comida del restaurante seleccionado
    app.get('/api/menu/type/:restaurant', function(req, res) {

        console.log("Buscando menu del restaurante:" + req.params.restaurant);

        //Codigo para buscar todo el menu en la base de datos
        restaurantModel.findOne({name: req.params.restaurant}, function(err, menuOptions) {
            if (err)
                res.send(err);

            res.json(menuOptions.options);
        });
    });

    //Ruta que devuelve el menu de un restaurante
    app.get('/api/menu/type/:restaurant/:option', function(req, res) {

        console.log("Buscando menu segun la opcion: " + req.params.option);

        //Codigo para buscar todo el menu en la base de datos
        menuItemModel.find({restaurant: req.params.restaurant, type: req.params.option}, function(err, menuItems) {
            if (err)
                res.send(err);

            res.json(menuItems);
        });
    });

    //Ruta para agregar un item al carrito de un usuario
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
        });
        res.json({message: "Agregado al carrito."});
    });
``
    //Ruta que devuelve el carrito de un usuario
    app.get('/api/user/cart/:userID', function(req, res) {
        var userModel = require('mongoose').model('User');
        userModel.findById(req.params.userID, function(err, user) {
            if (err)
                res.send(err);
            res.json(user.cart);
        });
    });

    //Ruta que devuelve las caracteristicas de un item del menu
    app.get('/api/menu/item/:itemID', function(req, res) {
        menuItemModel.findById(req.params.itemID, function (err, item) {
            if (err)
                console.log(err);
            res.json(item);
        });
    });

    //Ruta para eliminar un item del carrito de un usuario
    app.get('/api/user/cart/delete/:userID/:itemID', function(req, res) {
        var userModel = require('mongoose').model('User');
        userModel.findById(req.params.userID, function(err, user) {
            var cart = user.cart;
            var index = cart.indexOf(req.params.itemID);
            if (index >= 0) {
                cart.splice(index, 1);
                user.cart = cart;
                user.save(function(err) {
                    if (err) console.log(err);
                })
            }
            res.json(user.cart);
        });
    });

    //Ruta para obtener las ordenes de un restaurante
    app.get('/api/admin/:restaurant', function(req, res) {
        var orderModel = require('mongoose').model('Order');
        orderModel.find({restaurant: req.params.restaurant}, function (err, orders) {
            if (err) console.log(err);
            console.log(orders);
            res.json(orders);
        });
    });

    app.get('/api/admin/options/:restaurant', function(req, res) {
        restaurantModel.findOne({name: req.params.restaurant}, function(err, restaurant) {
            if (err) console.log(err);

            res.json(restaurant);
        });
    });

    app.post('/api/admin/add/option', function(req, res) {
        var restaurant = req.body.restaurant;
        var option = req.body.option;
    });

    return app;
}
