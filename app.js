const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const controller = require("./controller");
const cors = require("cors");

const port = process.env.PORT || 8001;
const router = express.Router();

var app = express();
app.use(cors());
var server = http.createServer(app);
var io = socketIo(server, {
  cors: {
    origin: '*'
  }
});

io.on("connect", (socket) => {
    /*  Called when a user first enters the site    */
    controller.initSocket(socket);

    // /*  Called when the user exits the site  */
    // socket.on("disconnect", (reason) => {
    //     controller.deleteSocket(socket);
    // })

    /*  Called a player sends message  */
    socket.on("client message", (word) => controller.sendMessage(socket));

});

router.get('/', (req, res) => { return res.status(200); });

server.listen(port, () => { console.log(`Listening on port: ${port}`); });