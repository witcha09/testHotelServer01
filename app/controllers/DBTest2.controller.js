const format = require('pg-format');
const pool = require('../services/connectDatabase');

const DBPool = pool.connect(function (err, client, done) {
    if (err) throw new Error(err);
    var ageQuery = format('SELECT * FROM user_tbl ORDER BY userid')
    client.query(ageQuery, function (err, result) {
      if (err) throw new Error(err);
      console.log(result.rows); 
    })
})

module.exports = {DBPool};