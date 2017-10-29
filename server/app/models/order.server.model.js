const mongoose =  require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({

	creator: {
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
	restaurant: String
	},{		
		collection: "orders"
});


mongoose.model('Order', OrderSchema);