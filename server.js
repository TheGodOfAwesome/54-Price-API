const express = require('express')
const app = express()
const mongoose = require('mongoose');
const Post = require('./models/postModel')
const port = process.env.PORT || 4000;

app.use(express.json())

// routes

app.get('/', (req, res) => {
    res.send('Get API')
})
