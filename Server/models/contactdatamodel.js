const mongoose = require("mongoose");

let contactschema = new mongoose.Schema({
  fullname: { type: String },
  mobileno: { type: Number },
  email: { type: String },
  subject: { type: String },
  message: { type: String },
});

const contactmodel = mongoose.model("contactdata", contactschema);

module.exports = { contactmodel };
