const User = require('mongoose').model('User');

exports.create = function(req, res, next) {
	const user = new User(req.body);

	user.save((err) => {
		if (err) {
			res.send(err);
		} else {
			res.json({status: "Usuario Creado"});
		}
	});
};