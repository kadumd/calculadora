const http = require("http")
const fs = require("fs")

const servidor = http.createServer((pedido, resposta) => {
    console.log(pedido.url)
    switch (pedido.url) {
        case '/':
            resposta.writeHead(200, { 'Conten-Type': 'text/html' })
            resposta.end(fs.readFileSync("./frontend/index.html"))
            break

        case '/style.css':
            resposta.writeHead(200, { 'Conten-Type': 'text/css' })
            resposta.end(fs.readFileSync("./frontend/style.css"))
            break

        case '/script.js':
            resposta.writeHead(200, { 'Conten-Type': 'text/javascript' })
            resposta.end(fs.readFileSync("./frontend/script.js"))
            break
    }
})

servidor.listen(3000)