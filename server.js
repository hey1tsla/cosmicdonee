const express = require("express")

const server = express()

server.all("/", (req, res) => {
  res.send("I am is Online")
})

function keepAlive() {
  server.listen(3000, () => {
    console.log("Webserver is working!")
  })
}

module.exports = keepAlive
//keep bot 24/7