'use strict';
const express = require('express');
const homeController = require('./controllers/home');

const defineRoutes = () => {
  const app = express();

  app.get('/', homeController.get);

  return app;
};

module.exports = {
  defineRoutes,
};
