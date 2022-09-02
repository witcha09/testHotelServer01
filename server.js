//const userDetail =  new require("./app/controllers/userDetail.controller");

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const userData = require("./app/controllers/DBTest.controller");
const userData2 = require("./app/controllers/DBTest2.controller");
const app = express();

/*
var corsOptions = {
  origin: "http://localhost:8081",
  Credential: true,
};
*/

app.use(express.json());

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
//app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
  //res.json({ message: "Welcome to Appcode application." +req.body });
  res.send(req.bodyParser);
  var user_name = req.body.Username1;
  var password = req.body.Password2;
  console.log("Print out "+user_name+" "+password );
  console.log("Data: " + req.bodyParser );
  console.log("Run on server");
});

app.post("/", (req, res) => {

  let customer = [ 
    {id:1,name:'สมหมาย',lastName:'สมดี',age:30},  
    {id:2,name:'สมศรี',lastName:'ศรีสมัย',age:25},
    {id:3,name:'สมไทย',lastName:'ใสดี',age:27},        
    {id:4,name:'หทัย',lastName:'ใจดี',age:22},
    {id:5,name:'หัศดี',lastName:'สีใส',age:23}, 
    {id:6,name:'อันนา',lastName:'ดาดา',age:24},
    {id:7,name:'ลูกตา',lastName:'พาชม',age:30}, 
    {id:8,name:'กังหัน',lastName:'หมุ่นดี',age:27},
 ] ;

  res.json({message: "Data from post", data: customer});
  console.log("data post:" + req.body.Username1 + " " + req.body.Pasword2);
  //userDetail.testFunction();
});

// routes
//require('./app/routes/auth.routes')(app);
//require('./app/routes/user.routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

//userData.getUser();
userData2.DBPool;

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
 
  Role.create({
    id: 2,
    name: "moderator"
  });
 
  Role.create({
    id: 3,
    name: "admin"
  });
}