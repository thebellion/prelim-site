var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema ({
    imagePath: {type: String, required: true},
    name: {type: String, required: true},
    jobTitle: {type: String, required: true},
    description: {type: String, required: true},
    twitter: {type: String, required: false},
    facebook: {type: String, required: false},
    linkedin: {type: String, required: false},
});

module.exports = mongoose.model('Employee', schema);


