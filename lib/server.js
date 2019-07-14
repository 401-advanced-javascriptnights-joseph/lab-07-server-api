'use strict';

const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080;

require('./routes/routes.js');

const notFound = require('../middleware/404.js');

const errorHandler = require('../middleware/500.js');

// When does this middleware run?
// What does it do?
app.use(express.json());

// When does this middleware run?
app.use((req, res, next) => {
  console.log('LOG:', req.method, req.path);
  next();
});

app.use('*', notFound);
app.use(errorHandler);

module.exports = {
  server: app,
  start: port => {
    let PORT = port || process.env.PORT || 8080;
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  },
};

