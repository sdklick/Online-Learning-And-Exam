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

  let findsubject_examcode = await questionsetschemamodel.findOne(
    {
      examkey: data.checkexamkey,
    },
    { examsubject: 1, _id: 0 }
  );

  if (response == null) {
    res.send({ found: false });
  } else {
    if (checkemailandexamkey == null) {
      let add = { ...data, findsubject_examcode };
      await registrationmodel.insertMany(add);
      res.send({ found: true, rdata: response });
    } else {
      res.send({ found: "examsubmit" });
    }
  }
};

module.exports = { handelregisdata };
