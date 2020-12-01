const http = require('http');
 
const { Pool } = require('pg');
const pool = new Pool({
 host: process.env.HOST,
 database: process.env.DB,
 user: process.env.USER,
 password: process.env.PASS,
 port: '5432',
});
pool.query('SELECT NOW()', (err, res) => {
 error = err;
 result = res;
 pool.end()
});
 
const hostname = '0.0.0.0';
const port = 3000;
 
const server = http.createServer((req, res) => {
 res.statusCode = 200;
 res.setHeader('Content-Type', 'text/plain');
 console
 res.end(JSON.stringify(result));
});
 
server.listen(port, hostname, () => {
 console.log(`Server running at http://${hostname}:${port}/`);
});
