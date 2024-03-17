const jwt = require("jsonwebtoken");
const jwtkey = "mernecom";
const { adminlogincheck } = require("../models/admincheckmodel");

const handeladmincheck = async (req, res) => {
  let getdata = req.body;
  let response = await adminlogincheck.findOne({
    adminid: getdata.adminid,
    adminpassword: getdata.adminpassword,
  });

  if (response) {
    jwt.sign({ response }, jwtkey, { expiresIn: "2h" }, (err, token) => {
      res.send({ found: true, auth: token });
    });
  } else {
    res.send({ found: false });
  }
};

module.exports = { handeladmincheck };
