const express = require("express");
const server = express();
require("dotenv").config()
//const dbconnecturl = "mongodb://127.0.0.1:27017/examapp";
const dbconnecturl =process.env.MONGODB_CONNECT_URI 
const { dbconnect } = require("./dbconnections");
const PORT = process.env.PORT;
const bodyparser = require("body-parser");
const { handelsignupdata } = require("./controllers/signupcontroler");
const { handelcontactdata } = require("./controllers/contactcontroler");
const { handelregisdata } = require("./controllers/registrationcontroler");
const { handelsetquestion } = require("./controllers/questionsetcontroler");
const { handeladmincheck } = require("./controllers/admincheckcontroler");
const { handelresultsearch } = require("./controllers/resultsearchcontroler");
const { handelexamlist } = require("./controllers/adminexamlistcontroler");
const { qsetsignin } = require("./controllers/questionsetsignincontroler");
const { registration_count } = require("./controllers/Home_regis_count");
const { examlistCount } = require("./controllers/Home_examlist_count");
const {
  adminregis_result,
} = require("./controllers/adminregis_result_controller");
const { resultdata } = require("./controllers/resultData");

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
server.post("/api/resultdata", resultdata);
server.post("/api/question", handelsetquestion);
server.get("/api/signin", qsetsignin);
server.post("/api/adminsignin", handeladmincheck);
server.get("/api/resultsearch", handelresultsearch);
server.get("/api/examlist", handelexamlist);
server.get("/api/adminregis_result", adminregis_result);
server.get("/api/registration_count", registration_count);
server.get("/api/examlist_count", examlistCount);


server.listen(PORT, () => {
  console.log("server Start");
});
