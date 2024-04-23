const { registrationmodel } = require("../models/registrationdatamodel");
const resultmarks = async (req, res) => {
  let data = req.body;
  let updateval = { obtainmark: data.obtainmarks, totalmark: data.totalmarks };
  await registrationmodel.updateOne(
    {
      email: data.email,
    },
    { $set: { marks: updateval } }
  );

  res.send({ post: true });
};

module.exports = { resultmarks };
