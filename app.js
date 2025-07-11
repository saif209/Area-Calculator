const express = require("express")
const bodyPaser = require("body-parser")
const app = express()

app.use(bodyPaser.urlencoded({ extended: true })); /
app.use(bodyPaser.json());

app.get("/", (req, res) => {
  res.sendFile(__dirname+"/index.html")
})

app.get("/circle", (req, res) => {
  res.sendFile(__dirname+"/circle.html")
})

app.get("/triangle", (req, res) => {
  res.sendFile(__dirname+"/triangle.html")
})

app.post("/triangle", (req, res) => {
  const height = req.body.height
  const base = req.body.base
  const area = 0.5 * base * height;
  res.send(`<h2>Area of Triangle is :${area}</h2>`)
})
app.post("/circle", (req, res) => {
  const radius = req.body.radius
  const area = Math.PI * radius * radius;
  res.send(`<h2>Area of Circle is :${area}</h2>`)
})

app.use( (req, res) => {
  res.send("<h1>404 !!! not a valid url</h1>")
})

module.exports = app
