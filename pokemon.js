const express = require("express")
const app = express()
const axios = require('axios')

app.get("/allpoke", (req,res) => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(response => res.json(response.data.results))
})

app.get("/allpoke/:limit/:offset", (req,res) => {
    const {limit, offset} = req.params
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(response => res.json(response.data.results))
})

app.get("/onepoke/:id", (req,res) => {
    const {id} = req.params
    axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => res.json(response.data))
})

module.exports = app;