const express = require('express')
const app = express()
const mongoose = require('mongoose');
const port = process.env.PORT || 4000;

app.use(express.json())

// routes

app.get('/', (req, res) => {
    res.send('535.66')
})
