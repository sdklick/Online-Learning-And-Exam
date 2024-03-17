const { questionsetschemamodel } = require("../models/questionsetmodel");

const handelexamlist=async (req, res) => {
    let response = await questionsetschemamodel.find({});
  
    if (response == null) {
      res.send(false);
    } else {
      res.send(response);
    }
  }

module.exports={handelexamlist}