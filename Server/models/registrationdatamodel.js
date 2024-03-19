const mongoose = require("mongoose");

let registrationschema = new mongoose.Schema({
  fullname: { type: String },
  phoneno: { type: String },
  gender: { type: String },
  email: { type: String },
  age: { type: String },
  checkexamkey: { type: String },
  marks: { type: Object },
  findsubject_examcode: { type: Object },
});

const registrationmodel = mongoose.model(
  "registrationdata",
  registrationschema
);

module.exports = { registrationmodel };
