const express = require("express");
const server = express();
const PORT = process.env.PORT || 4001;
const cors = require("cors");
const router = require("./routes");
const errorHandler = require("./middlewares/errorHandler");

server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: false}));

server.use(router);
server.use(errorHandler);

server.listen(PORT () => {
    console.log(`listening on port: ${PORT}`);
})
