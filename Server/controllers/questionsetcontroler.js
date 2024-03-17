const { questionsetschemamodel } = require("../models/questionsetmodel");

const handelsetquestion = async (req, res) => {
  let data = req.body;

  let question = [];

  for (let i = 1; i <= data.qcount; i++) {
    let b = [];
    for (let [key, value] of Object.entries(data)) {
      if (key[1] == `${i}` || key[key.length - 1] == `${i}`) {
        let data = { [key]: value };

        b.push(data);
      }
    }

    question.push(b);
  }

  let app = [];
  for (let z = 0; z < question.length; z++) {
    let finalObj = {};
    let arr = question[z];
    for (let i = 0; i < arr.length; i++) {
      Object.assign(finalObj, arr[i]);
    }
    app.push(finalObj);
  }

  let final = {
    question: app,
    setpersonname: data.setpersonname,
    examsubject: data.examsubject,
    examkey: data.examkey,
    settime: data.settime,
    setdate: data.setdate,
    qcount: data.qcount,
  };

  let validateexamkey = await questionsetschemamodel.findOne({
    examkey: data.examkey,
  });
  if (validateexamkey == null) {
    await questionsetschemamodel.insertMany(final);
    res.send({ found: "Your Question Successfully Set" });
  } else {
    res.send({ found: "Already Exists Change Exam Key" });
  }
};

module.exports = { handelsetquestion };
