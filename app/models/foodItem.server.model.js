const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodItemSchema = new Schema({

	owner: {
		type: String,
		require: true
	},
	name: {
		type:String,
		require: "Es requerido el nombre del plato."
	},
	price: {
		type: Number,
		require: "Es requerido el precio del plato."
	}

});

mongoose.model('FoodItem', FoodItemSchema);