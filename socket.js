const socketIO = require('socket.io');
const socket = {};

function conncet(server) {
    socket.io = socketIO(server);
}

module.exports = {
    conncet,
    socket,
};