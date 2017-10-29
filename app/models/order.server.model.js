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
	items: [{type: Schema.ObjectId, ref: 'FoodItem'}],
	price: {
		type: Number,
		require: true
	},
	restaurant: String

});


mongoose.model('Order', OrderSchema);