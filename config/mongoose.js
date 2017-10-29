const mongoose = require('mongoose');
 
module.exports = function() {
	const db = mongoose.connect('mongodb://pro:foodie@ds040027.mlab.com:40027/foodie');

	require('../app/models/user.server.model');
	require('../app/models/foodItem.server.model');
	require('../app/models/order.server.model');

	return db;
}