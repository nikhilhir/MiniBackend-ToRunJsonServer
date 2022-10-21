require('dotenv').config()
const jsonServer = require("json-server");
const server = jsonServer.create();
const PORT = process.env.PORT || 3000;
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));
const middlewares = jsonServer.defaults();
server.use(middlewares);
server.use(jsonServer.bodyParser);
server.use(router);
//server.use("/api", router);
server.listen(PORT, () => console.log("Running on port 3000"));



// const jsonServer = require("json-server");
// const server = jsonServer.create();
// const router = jsonServer.router("db.json");
// const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 3000;

// server.use(middlewares);
// server.use(router);

// server.listen(port);


// app.listen(7000, async () => {
//   try {
//     await connection;
//     console.log("connect to db");
//   } catch (error) {
//     console.log("err to connect to db");
//     console.log(error);
//   }
//   console.log("listining in port http://localhost:7000");
// });
