const { contactmodel } = require("../models/contactdatamodel");

const handelcontactdata = async (req, res) => {
  let data = req.body;
  await contactmodel.insertMany(data);
  res.send({ post: true });
};

module.exports={handelcontactdata}
