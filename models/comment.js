const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var commentSchema = new Schema({
    
    text: String,
    author: {
        id: {
            type: Schema.Types.ObjectId,
            ref:"User"
        },
        email: String
    }
});

module.exports = mongoose.model("Comment", commentSchema);