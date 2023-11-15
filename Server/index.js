require("dotenv").config();
const cors = require("cors");
const morgan = require("morgan");
const server = require("./src/server");
const { database } = require("./src/database/database");

const { LOCALHOST_PORT } = process.env;
console.log(LOCALHOST_PORT);

server.use(cors());
server.use(morgan("dev"));

database
  .sync({ force: true })
  .then(() => {
    server.listen(LOCALHOST_PORT, () => {
      console.log(`Server raised in port: ${LOCALHOST_PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
