const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    local:{

        email: { 
            type: String,
            unique: true, 
            lowercase: true
            },
        password: {
            type: String
               }
    }
});

//Hash the user password and generating a salt of 10 to the power 2
UserSchema.methods.generateHash = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

//match passwords 
UserSchema.methods.validPassword = function(password){
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', UserSchema);