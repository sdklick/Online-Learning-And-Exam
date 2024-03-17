const { signupdatamodel } = require("../models/signupmodel");

const qsetsignin = async (req, res) => {
  let getdata = req.query.ID;
  let response = await signupdatamodel.findOne({
    user_name: getdata.user_name,
    password: getdata.password,
  });
  if (response == null) {
    res.send({ found: false });
  } else {
    res.send({ found: true, username: response.person_name });
  }
};

module.exports = { qsetsignin };
