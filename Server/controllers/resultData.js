const { registrationmodel } = require("../models/registrationdatamodel");
const resultdata = async (req, res) => {
  let data = req.body;
  let updateval = { obtainmark: data.obtainmarks, totalmark: data.totalmarks };
  await registrationmodel.findOneAndUpdate(
    {
      $and: [{ checkexamkey: data.examkey }, { email: data.email }],
    },
    { marks: updateval }
  );
  res.send({ post: true });
};

module.exports = { resultdata };
