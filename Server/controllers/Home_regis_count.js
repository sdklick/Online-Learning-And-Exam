const { registrationmodel } = require("../models/registrationdatamodel");
const registration_count = async (req, res) => {
  let countregis = await registrationmodel.countDocuments({});
  res.send({ documentCount: countregis });
};

module.exports = { registration_count };
