'use strict';
const express = require('express');
const path = require('path');
const dada = require('./dada');
const app = express();


app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

// Homepage
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});


// Get the poem
app.post('/poem', async (req, res) => {
  const articleBody = await dada.getArticleBody(req.body.articleUrl)
  const poem = dada.makePoem(articleBody, req.body.seed)
  res.send(poem)
})


app.listen(3000);
