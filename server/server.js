const express = require("express");
const server = express();
const PORT = process.env.PORT || 4001;
const cors = require("cors");
const bodyParser = require("body-parser")
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true}));

server.use(router);
server.use(errorHandler);

server.listen(PORT () => {
    console.log(`listening on port: ${PORT}`);
})
