const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: {
		type: String,
		required: true,
		minlength: [3, 'Minimum 3 chars'],
		maxlength: [20, 'Maximum 20 chars'],
	},
	lastName: {
		type: String,
		required: true,
		minlength: [3, 'Minimum 3 chars'],
		maxlength: [20, 'Maximum 20 chars'],
	},
	email: {
		type: String,
		required: true,
		validate: {
			validator: function (v) {
				return v.endsWith('.com');
			},
			message: 'Invalid email formats',
		},
	},
	age: Number,
	bio: String,
	single: Boolean,
});

const Person = mongoose.model('Person', personSchema);

module.exports = Person