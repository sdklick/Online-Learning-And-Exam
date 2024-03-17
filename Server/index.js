const express = require("express");
const server = express();
const dbconnecturl = "mongodb://127.0.0.1:27017/examapp";
const { dbconnect } = require("./dbconnections");
const PORT = 2000;
const bodyparser = require("body-parser");
const { handelsignupdata } = require("./controllers/signupcontroler");
const { handelcontactdata } = require("./controllers/contactcontroler");
const { handelregisdata } = require("./controllers/registrationcontroler");
const { handelsetquestion } = require("./controllers/questionsetcontroler");
const { handeladmincheck } = require("./controllers/admincheckcontroler");
const { handelresultsearch } = require("./controllers/resultsearchcontroler");
const { handelexamlist } = require("./controllers/adminexamlistcontroler");
const { qsetsignin } = require("./controllers/questionsetsignincontroler");
const { registrationmodel } = require("./models/registrationdatamodel");

const cors = require("cors");
server.use(cors());

server.use(
  bodyparser.urlencoded({
    extended: true,
  })
);
server.use(bodyparser.json());

dbconnect(dbconnecturl);

server.post("/api/signup", handelsignupdata);
server.post("/api/registration", handelregisdata);
server.post("/api/contact", handelcontactdata);
server.post("/api/resultdata", async (req, res) => {
  let data = req.body;
  let updateval = { obtainmark: data.obtainmarks, totalmark: data.totalmarks };
  let update = await registrationmodel.findOneAndUpdate(
    {
      $and: [{ checkexamkey: data.examkey }, { email: data.email }],
    },
    { marks: updateval }
  );
  res.send({ post: true });
});

server.post("/api/question", handelsetquestion);
server.get("/api/signin", qsetsignin);
server.post("/api/adminsignin", handeladmincheck);
server.get("/api/resultsearch", handelresultsearch);
server.get("/api/examlist", handelexamlist);

server.listen(PORT, () => {
  console.log("server Start");
});
