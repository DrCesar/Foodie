const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;


const UserSchema = new Schema({

	name: String,
	username: {
		type: String,
		trim: true,
		require: true,
		unique: "El nombre de usuario debe ser unico."
	},
	email: {
		type: String,
		index: true,
		unique: true,
		require: "Es necesario ingresar un correo electronico.",
		 match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
	},
	password: {
		type: String,
		validate: [(password) => {
			return password.length > 6;
			},
			"La contraseña debe contener almenos 6 caracteres."
		]
	},
	salt: {
		type: String
	},
	provider: {
		type: String,
		required: 'Provider is required'
	},
	poviderId: String,
	providerData: {},
	created: {
		type: Date,
		default: Date.now
	},
	role: {
		type: String,
		enum: ['Admin', 'Provider', 'User']
	},
	cart: {
		type: [String]
	}

});

// UserSchema.pre('save', function(error, next) {
// 	if (error.name === "MongoError" && error.code === 11000) {
// 		next (new Error("El email y nombre de usuario deben ser unicos."));
// 	} else {
// 		next(error);
// 	}
// });

UserSchema.pre('save', function(next) {
	if (this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
	}
	next();
});

UserSchema.methods.hashPassword = function(password) {
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString('base64');
}

UserSchema.methods.authenticate = function(password) {
	return this.password === this.hashPassword(password);
};

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
