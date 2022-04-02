const express = require('express')
const app = express()

app.get('/api/v1/sabado/', function (req, res) {
  res.send('Hola soy la peticion GET')
})

app.listen(3000,function(){
    console.log("SERVIDOR ENCENDIDO")
})