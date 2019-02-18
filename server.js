const express = require('express')
const path = require('path')
const fareutils = require('./fareutil')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/',express.static(path.join(__dirname,'public')))

app.post('/calcfare', (req,res) => {
    let km = parseInt(req.body.km)
    let min = parseInt(req.body.min)

    let fare = fareutils.calcFare(km,min)
    res.send({fare:fare})
})

app.get('/rates',(req,res) => {
    res.send(fareutils.rate)
})
exports = module.exports = app