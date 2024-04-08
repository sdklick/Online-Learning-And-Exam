const { signupdatamodel } = require("../models/signupmodel");
const jwt = require("jsonwebtoken");
const jwtkey = process.env.JWTKEY;

const qsetsignin = async (req, res) => {
  let getdata = req.body;
  let response = await signupdatamodel.findOne({
    user_name: getdata.user_name,
    password: getdata.password,
  });

  if (response == null) {
    res.send({ found: false });
  } else {
    jwt.sign({ response }, jwtkey, { expiresIn: "2h" }, (err, token) => {
      res.send({ found: true, username: response.person_name, auth: token });
    });
  }
};

module.exports = { qsetsignin };
