const { questionsetschemamodel } = require("../models/questionsetmodel");
const examlistCount = async (req, res) => {
  let countexam = await questionsetschemamodel.find(
    {},
    { examsubject: 1, setpersonname: 1 }
  );
  res.send(countexam);
};

module.exports = {examlistCount};
