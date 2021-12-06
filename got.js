const express = require("express")
const app = express()
const got = require('./got.json')
const axios = require('axios')

app.get("/game-of-thrones/json", (req,res) => {
    res.send(got)
})

app.get("/game-of-thrones/url", (req,res) => {
    axios.get('https://thronesapi.com/api/v2/Characters')
    .then(response => res.json(response.data))
})

module.exports = app;