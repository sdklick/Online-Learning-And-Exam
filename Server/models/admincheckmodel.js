const mongoose = require("mongoose");

let admimloginschema = new mongoose.Schema({
  adminid: { type: String },
  adminpassword: { type: String },
});

const adminlogincheck = mongoose.model("adminlogin", admimloginschema);

module.exports = { adminlogincheck };
