'use strict';

const listBeans = beansRepository => ({
  execute: () => beansRepository().findAll(),
});

module.exports = { listBeans };