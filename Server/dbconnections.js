const mongoose = require("mongoose");

const dbconnect = async (url) => {
  await mongoose.connect(url);
  console.log("database connect");
};

module.exports = { dbconnect };
