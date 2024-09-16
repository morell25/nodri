const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
    cors: { origin: "*", methods: ["GET", "POST"] }
});
io.on("connection", (socket) => {
    let sequenceNumberByClient = new Map();
    sequenceNumberByClient.set(socket, 1);
    console.log(socket.id + " se ha conectado")
        


    socket.on("clientData", (arg) => {
        console.log(arg); 
    });

    socket.on("sendMsg", (arg) => {
        console.log(arg); 
    });

    socket.on("disconnect", () => {
        sequenceNumberByClient.delete(socket);
        console.info(`${socket.id} se ha ido`);
    });

});


server.listen(3000);