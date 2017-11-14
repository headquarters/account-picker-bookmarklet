const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('./dist'));

app.get('/', function (req, res) {
  const bookmarklet = fs.readFileSync('./dist/AccountPickerBookmarklet.js');

  res.send(`
    <!doctype html>
    <html lang="en">
    <head>
      <title>Bookmarklet Test Page</title>
    </head>
    <body>
      <div id="app"></div>
      <p>
        <a href="${bookmarklet}">Open Bookmarklet</a> 
      </p>
    </body>  
    </html>
  `);
});

app.listen(3000, function () {
  console.log('Sample page available at localhost:3000')
});