const { registrationmodel } = require("../models/registrationdatamodel");
const adminregis_result = async (req, res) => {
  let searchquery = req.query.scarch;

  if (searchquery) {
    let response = await registrationmodel.find({
      $or: [
        { fullname: { $regex: searchquery, $options: "i" } },
        { phoneno: { $regex: searchquery, $options: "i" } },
        { gender: { $regex: searchquery, $options: "i" } },
        { age: { $regex: searchquery, $options: "i" } },
        { email: { $regex: searchquery, $options: "i" } },
        {
          checkexamkey: { $regex: searchquery, $options: "i" },
        },
        {
          "findsubject_examcode.examsubject": {
            $regex: searchquery,
            $options: "i",
          },
        },
      ],
    });
    res.send(response);
  } else {
    let response = await registrationmodel.find({});
    res.send(response);
  }
};

module.exports = {adminregis_result};
