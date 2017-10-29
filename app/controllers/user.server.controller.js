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


exports.signin = function(req, res, next) {

	passport.authenticate('local', function(err, user, info) {

		if (err) { return next(err); }
		if (!user) { res.json({message: "El usuario o la contraseña son invalidos."}); }

		req.logIn(user, function(err) {
			console.log("hola");
			if (err) { return next(err); }


			res.json({user, message: "Inicio de Sesion."});
		});

	})(req, res, next);
};


exports.signout = function(req, res, next) {

	req.logout();
	res.json({message: "Logout exisotso."});
}


exports.getUser = function(req, res, next, username) {

	User.findOne({
		username: username
	}, function(err, user) {
		if (err) {
			next(err);
		} else {
			req.user = user;
			next();
		}
	});
};

