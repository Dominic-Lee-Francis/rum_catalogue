/* Initialize the database connection
    first we require the pg module
    then we create a new Pool instance and pass in the connection details
    
    The Pool instance is an object that manages a connection pool. It's a good idea to use a connection pool because it allows 
    us to reuse connections and avoid the overhead of creating a new connection every time we need to query the database.

    In my example, I'm using the default connection details for my local PostgreSQL database for the server RumHabourHK.
    I have no password and i set a port of 5432 because that's the default port for PostgreSQL.

    Pool is from the pg module, and it's a class that manages a pool of connections to the database.
*/

const Pool = require('pg').Pool;

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "rum_habour_hk",
    password: "",
    port: 5432
});


module.exports = pool;