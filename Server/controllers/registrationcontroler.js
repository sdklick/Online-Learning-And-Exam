const { questionsetschemamodel } = require("../models/questionsetmodel");
const { registrationmodel } = require("../models/registrationdatamodel");

const handelregisdata = async (req, res) => {
  let data = req.body;
  let response = await questionsetschemamodel.findOne({
    examkey: data.checkexamkey,
  });
  let checkemailandexamkey = await registrationmodel.findOne({
    $and: [{ checkexamkey: data.checkexamkey }, { email: data.email }],
  });
  if (response == null) {
    res.send({ found: false });
  } else {
    if (checkemailandexamkey == null) {
      await registrationmodel.insertMany(data);
      res.send({ found: true, rdata: response });
    } else {
      res.send({ found: "examsubmit" });
    }
  }
};

module.exports={handelregisdata}
