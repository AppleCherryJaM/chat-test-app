const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const chatSchema = new mongoose.Schema({
	name: { type: 'string', required: true },
});
userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Chat', chatSchema);