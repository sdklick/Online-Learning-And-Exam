const { registrationmodel } = require("../models/registrationdatamodel");

const handelresultsearch = async (req, res) => {
  let getdata = req.query.ID;
  let response = await registrationmodel.findOne({
    $and: [{ email: getdata.email }, { checkexamkey: getdata.examkey }],
  });

  if (response == null) {
    res.send({ found: false, result: null });
  } else {
    res.send({ found: true, result: response });
  }
};

module.exports = { handelresultsearch };
