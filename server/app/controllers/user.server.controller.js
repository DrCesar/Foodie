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


			res.json({user, message: "Inicio de Sesion.", userID: user._id, restaurant: user.currentRestaurant});
		});

	})(req, res, next);
};


exports.signout = function(req, res, next) {

	req.logout();
	res.json({message: "Logout exisotso."});
}


exports.getUser = function(req, res, next) {

	User.findById(req.params.userID, 
		function(err, user) {
			if (err) 
				res.json(err);
			res.json(user);
	});
};

exports.searchUser = function(req, res, next) {

	User.find({username: { $regex: '.*' + req.params.username + '.*', $options: 'i'}}, 
		function(err, users) {
			if (err) 
				res.json({err, message: 'No se encontraron usuarios'});
			res.json(users);
	});
}


exports.addFriend = function(req, res, next) {

	User.findById(req.params.userID,
		function(err,user) {
			if (err) res.json({err, message: 'Nose encontro el usuario.'});

			if (user.friends.indexOf(req.params.friendID) < 0) {
				user.friends.push(req.params.friendID);
				user.save(err => {
					if (err) res.json({err, message: 'No se logro agregar al usuario.'});
					console.log(user.friends);
					res.json({message: 'Amigo agregado.'});
				});
			} else {
				res.json({message: 'Amigo existente.'})
			}
		});
}

exports.deleteCart = function(req, res, next) {

	User.update({_id: req.params.userID}, {
		$set: { cart:[] }
	}, function(err, raw) {
		if (err)
			res.send(err);
		res.json(raw);
	});
};
