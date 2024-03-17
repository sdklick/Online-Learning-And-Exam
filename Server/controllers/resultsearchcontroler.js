const { registrationmodel } = require("../models/registrationdatamodel");
const { questionsetschemamodel } = require("../models/questionsetmodel");

const handelresultsearch = async (req, res) => {
  let getdata = req.query.ID;
  let response = await registrationmodel.findOne({
    $and: [{ email: getdata.email }, { checkexamkey: getdata.examkey }],
  });

  let examsubject = await questionsetschemamodel.findOne(
    {
      examkey: getdata.examkey,
    },
    { examsubject: 1, _id: 0 }
  );

  if (response == null) {
    res.send({ found: false, result: null });
  } else {
    res.send({ found: true, result: response, subject: examsubject });
  }
};

module.exports = { handelresultsearch };
