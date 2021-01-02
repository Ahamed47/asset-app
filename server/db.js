const Pool = require("pg").Pool;

const pool = new Pool({
  host: "localhost",
  user: "postgres",
  password: "ahamed24",
  port: 5432,
  database: "assert_proj",
});

module.exports = pool;
