const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({

	owner: {
		type: String,
		require: true
	},
	firstName: {
		type: String,
		require: true
	},
	lastName: {
		type: String,
		require: true
	},
	participants: {
		type: [String],
	},
	items: [Schema.Types.Mixed],
	price: {
		type: Number,
		require: true
	},
	date: {
		type: Date,
		default: Date.now
	},
	restaurant: String
	},{
		collection: "orders"
});


mongoose.model('Order', OrderSchema);
