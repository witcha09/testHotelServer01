const {Client} = require("pg");

const DBConfig = require("../config/db.config");


const client = new Client({
  host: DBConfig.HOST,
  user: DBConfig.USER,
  port: DBConfig.PORT,
  password: DBConfig.PASSWORD,
  database: DBConfig.DATABASE,
});

client.connect();

client.query('SELECT NOW()', (err,res) => {
  console.log(err, res);
  client.end();
})

class userDetail {
  testFunction() {
  console.log("test");
  }

}

module.exports =  userDetail;
