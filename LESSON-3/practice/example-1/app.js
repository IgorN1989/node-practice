// import http from "http";

// const server = http.createServer((request, response) => {
//   const { url } = request;
//   if (url === "/") {
//     response.write("<h2>Home page</h2>");
//   } else if (url === "/contacts") {
//     response.write("<h2>Contacts page</h2>");
//   } else {
//     response.write("<h2>Not found</h2>");
//   }
//   response.end();
// });

// server.listen(3000, () => {
//   console.log("Server running!");
// });

import express from "express";

const app = express(); // app - web-server

app.get("/", (request, response) => {
  response.send("<h1>Home page</h1>");
});

app.get("/contacts", (request, response) => {
  console.log(request.method);
  console.log(request.url);
  response.send("<h1>Contacts page</h1>");
});

app.listen(3000, () => {
  console.log("Server running on 3000 port");
});
