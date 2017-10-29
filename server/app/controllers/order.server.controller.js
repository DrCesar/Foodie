const Order = require('mongoose').model('Order');


exports.addOrder = function(req, res, next) {
	const order =  new Order(req.body);

	order.save(function(err) {
		if (err)
			res.json({err, message: "Error en la creación de la orden."});
		else
			res.json({message: "Orden creada con exito."})
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