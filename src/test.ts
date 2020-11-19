import express from "express"
const app = express()

app.all("/hello", (req, res) => {
  res.end("Hi!")
})

app.listen(5000, () => {
  console.log("Test app listening on 5000.")
})