const Pool = require('pg').Pool
const pool = new Pool({
  user: 'witcha',
  host: '172.16.2.184',
  database: 'witcha_db',
  password: 'mozart6517',
  port: 47206,
});


const getUser = () => {
    console.log("connect to database");
    return new Promise(function(resolve, reject) {
      pool.query('SELECT * FROM user_tbl ORDER BY userid', (error, results) => {
        if (error) {
          reject(error)
        }
        console.log(results.rows);
        resolve(results.rows[0]);
      });
      console.log("connect to database");
    }) 
    
  }

module.exports = {getUser}  