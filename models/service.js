const mongoose = require('mongoose');

const Schema = mongoose.Schema;

var serviceSchema = new Schema({
    name: String,
    price: String,
    image: String,
    description: String,
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref: "User"
        },
        email: String
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: "Comment"
        }
        ]
});

module.exports = mongoose.model('Service', serviceSchema);
