const mongoose = require("mongoose");

let registrationschema = new mongoose.Schema({
  fullname: { type: String },
  phoneno: { type: Number },
  gender: { type: String },
  email: { type: String },
  age: { type: Number },
  checkexamkey: { type: String },
  marks: { type: Object },
});

const registrationmodel = mongoose.model(
  "registrationdata",
  registrationschema
);

module.exports = { registrationmodel };
