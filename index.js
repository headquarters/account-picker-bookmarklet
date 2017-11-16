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
      <style>
        body {
          font-family: sans-serif;
        }

        label {
          display: block;
          padding: 5px 0;
        }

        .bookmarklet {
          text-decoration: none;
          background: lightblue;
          padding: 10px;
          color: black;
        }

        .bookmarklet:hover {
          background: lightskyblue;
        }

      </style>
    </head>
    <body>
      <div id="app"></div>
      <div>
        <form>
          <h1>Sample form</h1>
          <label>Username: <input type="text" name="username" /></label>
          <label>Password: <input type="password" name="password" /></label>
        </form>
      </div>
      <p>
        <a class="bookmarklet" href="${bookmarklet}">Open Bookmarklet</a> 
      </p>
    </body>  
    </html>
  `);
});

app.listen(3000, function () {
  console.log('Sample page available at localhost:3000')
});