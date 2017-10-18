import express from 'express';
const app = express();
const PORT = 3000;
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs';
import App from './src/App';
import mongoose from 'mongoose';
import fetch from 'isomorphic-fetch';

const URI = 'mongodb://heroku_f51dh265:prtqmer3p1hvmidak0h6mlumt0@ds121665.mlab.com:21665/heroku_f51dh265';
// mongoose
mongoose.connect(URI, {
  useMongoClient: true
});

var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

var BlogPost = new Schema({
    title     : String,
    subtitle  : String,
    body      : String,
    date      : Date
});

var Post = mongoose.model('Post', BlogPost);

const html = fs.readFileSync(__dirname + '/dist/index.html', 'utf8');

app.use(express.static('dist'));

app.get('*', (req, res) => {
  let context = {};
  const content = renderToString(
    <StaticRouter location={req.url} context={context}>
      <App />
    </StaticRouter>
  );
  let reactHtml = html.replace('<!-- APP -->', content);
  res.send(reactHtml);
})

app.listen(PORT, () => {
  console.log("Server started on port: " + PORT)
})
