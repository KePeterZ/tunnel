import express from "express";
const server = express()

import axios from "axios";

const protocol = "http"
const destinationIP = "127.0.0.1:5000"

server.all("*", async(req, res) => {
  console.log(`Request came to ${req.url} with method of ${req.method}. Forwarding.`)
  let forwarded = await axios({
    url: `${protocol}://${destinationIP}${req.url}`,
    method: req.method as any,
    data: req.body
  })
  res.end(await forwarded.data)
})

server.listen(3000, () => {
  console.log("Tunneling everything on port 3000.")
})