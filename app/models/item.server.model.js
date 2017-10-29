const mongoose = require('mongoose').schema();
const Schema = mongoose.Schema;

const ItemSchema = new Schema({

	name: {
		type:String,
		require: "Es requerido el nombre del plato."
	},
	price: {
		type: Number,
		require: "Es requerido el precio del plato."
	},
	restaurant: String

});

mongoose.model('Item', ItemSchema);