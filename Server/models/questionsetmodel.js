const mongoose = require("mongoose");
let questionsetschema = new mongoose.Schema({
  setpersonname: { type: String },
  settime: { type: String },
  setdate: { type: String },
  question: {},
  examsubject: { type: String },
  examkey: { type: String },
});

const questionsetschemamodel = mongoose.model("questionset", questionsetschema);

module.exports = { questionsetschemamodel };
