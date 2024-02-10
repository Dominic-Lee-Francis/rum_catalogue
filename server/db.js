const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "rum_habour_hk",
    password: "",
    port: 5432
});


module.exports = pool;