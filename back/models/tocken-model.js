const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
	user: {type: mongoose.Schema.Types.ObjectId, ref: "User"},
	refreshToken: {type: 'string', required: true}
});

module.exports = mongoose.model('Token', tokenSchema);