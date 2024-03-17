const mongoose = require("mongoose");
let signupdataschma = new mongoose.Schema({
  person_name: { type: String },
  email_id: { type: String },
  user_name: { type: String },
  password: { type: String },
});

const signupdatamodel = mongoose.model("signupdata", signupdataschma);

module.exports = { signupdatamodel };
