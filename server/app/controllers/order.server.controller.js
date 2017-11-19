const Order = require('mongoose').model('Order');


exports.addOrder = function(req, res, next) {

	const order =  new Order(req.body);
    var userModel = require('mongoose').model('User');

	userModel.findById(order.owner, function(err, user) {
		order.firstName = user.firstName;
		order.lastName = user.lastName;
		order.status = 'Pendiente';
		order.save(function(err) {
			if (err)
				res.json({err, message: "Error en la creación de la orden."});
			else
				res.json({message: "Orden creada con exito.", order})
		});
	});
};



exports.getOrder = function(req, res, next) {

	Order.find({restaurant: req.params.restaurant},
		function(err, order) {
			if (err) {
				res.json(err);
			}
			res.json(order);
		});
};

exports.getUserOrders = function(req, res, next) {

	Order.find({owner: req.params.userID},
		function(err, order) {
			if (err) 
				res.json({err, message: 'No se encontraron las ordenes'});
			res.json(order);
		});
}

exports.deleteOrder = function(req, res, next) {

	Order.findById(req.params.orderID,
		function(err, order) {
			if (err) {
				res.json({err, message: 'No se encontro la orden a eliminar.'});
			} 
			order.remove(function(err) {
				if (err)
					res.json({err, message: "No se pudo eliminar la orden."});
				res.json({err, message: "Orden eliminada exitosamente."})
			})
		});

};

exports.completeOrder = function(req, res, next) {

	Order.findById(req.params.orderID,
		function(err, order) {
			if (err) {
				res.json()
			}
			order.status = 'complete';
			order.save(function(err) {
				if (err) {
					res.json({err, message: 'No se logro completar la orden.'})
				}
				res.json({owner: order.owner, message: 'Orden completada.'});
			});
		});
}
