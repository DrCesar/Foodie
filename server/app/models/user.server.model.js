const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

	name: String,
	username: {
		type: String,
		trim: true,
		require: true,
		unique: "El nombre de usuario debe ser unico."
	},
	password: {
		type: String,
		validate: [(password) => {
			return password.length > 6;
			},
			"Password should be longer."
		]
	},
	email: {
		type: String,
		index: true,
		unique: true,
		require: "Es necesario ingresar un correo electronico.",
		 match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	role: {
		type: String,
		enum: ['Admin', 'Provider', 'User']
	}
});

// UserSchema.statics.findUniqueUsername = function(username, suffix, callback) {
// 	var possibleUsername  username + (suffix || '');

// 	this.fineOne({
// 		username: possibleUsername
// 	}, (err, user) => {
// 		if (!err) {
// 			if (!user) {
// 				callback(possibleUsername);
// 			} else {
// 				return this.findUniqueUsername(username, (suffix || 0) + 1, callback);
// 			}
// 		} else {
// 			callback(null);
// 		}
// 	});
// };

// UserSchema.set('toJSON', {
// 	getters: true
// });

mongoose.model('User', UserSchema);

