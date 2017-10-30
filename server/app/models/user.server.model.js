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
			return password.length >= 6;
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

UserSchema.methods.hashPass = function() {
	if (this.password) {
		this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
		this.password = this.hashPassword(this.password);
		console.log(this.password);
	}
}

UserSchema.methods.hashPassword = function(password) {
	return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha1').toString('base64');
}

UserSchema.methods.authenticate = function(password) {
	console.log(this.hashPassword(password));
	console.log(this.hashPassword(password));
	return this.password === this.hashPassword(password);
};

mongoose.model('User', UserSchema);
