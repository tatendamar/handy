const mongoose = require("mongoose");

const Schema = mongoose.Schema;

var proSchema = new Schema({
  title:     String,
  username:  String,
  address:   String,
  mobile:    String,
  level:     String,
  years:     String,
  city:      String,
  area:      String,
  desc:      String,
  price:     Number,
  firstname: String,
  lastname:  String,
});

module.exports = mongoose.model("Pro", proSchema);