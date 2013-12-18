var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/arbonne');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var UserSchema = new Schema({
    firstname: {
        type:string
    },
    lastname: {
        type:string
    },
    address: {
        type:string
    },
    email: {
        type:string
    },
    password: {
        type:string
    },
    status: {
        type:string
    },
    date: {
        type:string
    }
});

UserSchema.methods.query = function(entities) {
    console.log("Queried");
    console.log(entities);
}

exports.User = mongoose.model('user', UserSchema);
