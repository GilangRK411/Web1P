var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testSchema = new Schema ({

    username: {
        type: String,
        required: [true, 'Harus diisi']
    },
    email: {
        type: String,
        required: [true, 'Harus diisi']
    },
    password: {
        type: String,
        required: [true, 'Harus diisi']
    }
});

module.exports = mongoose.model('test', testSchema);