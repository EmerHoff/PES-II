let config = {
    user: 'postgres',
    database: 'pesII',
    password: 'postgres',
    host: 'host',
    port: 5432,
    max: 10,
    idleTimeoutMillis: 30000
};
 
const pg = require('smn-pg')(config);