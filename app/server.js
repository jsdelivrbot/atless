import express from 'express';
const app = express();
const PORT = 3000;
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import fs from 'fs';
import App from './src/App';
// import fetch from 'isomorphic-fetch';

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
