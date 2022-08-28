const http = require('http');
const PORT = process.env.port || 3000;
const app = require('./app.js');

const server = http.createServer(app);

server.listen(PORT, () => {
    console.log("task server started");
});