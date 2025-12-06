import fs from "fs";

export default function handler(req, res) {
  const url = req.url;

  switch (url) {
    case "/":
      res.setHeader("Content-Type", "text/html");
      res.status(200).send(fs.readFileSync("./index.html", "utf-8"));
      break;

    case "/style.css":
      res.setHeader("Content-Type", "text/css");
      res.status(200).send(fs.readFileSync("./frontend/style.css", "utf-8"));
      break;

    case "/script.js":
      res.setHeader("Content-Type", "text/javascript");
      res.status(200).send(fs.readFileSync("./script.js", "utf-8"));
      break;

    default:
      res.status(404).send("404 Not Found");
  }
}


// const http = require("http")
// const fs = require("fs")

// const servidor = http.createServer((pedido, resposta) => {
//     console.log(pedido.url)
//     switch (pedido.url) {
//         case '/':
//             resposta.writeHead(200, { 'Conten-Type': 'text/html' })
//             resposta.end(fs.readFileSync("./index.html"))
//             break

//         case '/style.css':
//             resposta.writeHead(200, { 'Conten-Type': 'text/css' })
//             resposta.end(fs.readFileSync("./frontend/style.css"))
//             break

//         case '/script.js':
//             resposta.writeHead(200, { 'Conten-Type': 'text/javascript' })
//             resposta.end(fs.readFileSync("./script.js"))
//             break
//     }
// })

// servidor.listen(3000)