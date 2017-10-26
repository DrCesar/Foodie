const User = require('mongoose').model('User');
const passport = require('passport');

exports.signup = function(req, res, next) {
	const user = new User(req.body);
	user.provider = 'local';

	console.log(user);

	user.save((err) => {
		if (err) {
			res.send(err);
		} else {
			console.log("creado perro");
			res.json({message: "El usuario ha sido creado."});
		}
	});
};

