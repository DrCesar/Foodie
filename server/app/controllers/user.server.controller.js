const User = require('mongoose').model('User');
const passport = require('passport');

exports.signup = function(req, res, next) {
	var user = new User(req.body);
	user.provider = 'local';
	user.role = 'User';

	if (user.password.length < 6) {
		res.json({message:"La contraseña debe contener almenos 6 caracteres."});
	} else {
		user.hashPass();
		user.save((err) => {
			if (err) {
				res.send(err);
			} else {
				res.json({message: "El usuario ha sido creado.", userID: user._id});
			}
		});
	}
};


exports.signin = function(req, res, next) {

	passport.authenticate('local', function(err, user, info) {

		if (err) { return next(err); }
		if (!user) { res.json({message: "El usuario o la contraseña son invalidos."}); }

		req.logIn(user, function(err) {
			if (err) { return next(err); }


			res.json({user, message: "Inicio de Sesion.", userID: user._id});
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
		}

		res.json(user);
	});
};
