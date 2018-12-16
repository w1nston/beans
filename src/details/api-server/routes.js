'use strict';
const express = require('express');
const beansController = require('./controllers/beans');

const defineRoutes = () => {
  const app = express();

  app.get('/beans', beansController.get);

  return app;
};

module.exports = {
  defineRoutes,
};
