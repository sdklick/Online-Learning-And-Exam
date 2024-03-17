const { signupdatamodel } = require("../models/signupmodel");

const handelsignupdata = async (req, res) => {
  let data = req.body;
  let response = await signupdatamodel.findOne({
    $or: [
      { user_name: data.user_name },
      { email_id: data.email_id },
      { password: data.password },
    ],
  });

  if (response == null) {
    await signupdatamodel.insertMany(data);
    res.send({ post: "Signup Successful" });
  } else {
    res.send({ post: "Already Exists" });
  }
};

module.exports = { handelsignupdata };
