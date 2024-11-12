const http = require('http');
const { Server } = require('socket.io');

let io;

const socketeSetup = (app) => {
    const server = http.createServer(app);
    io = new Server(server);


}