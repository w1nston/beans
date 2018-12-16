'use strict';
const { listBeans } = require('../../../application/use-case/listBeans');
const {
  beansRepositoryFactory,
} = require('../../../interface-adapters/repository/beansRepositoryMemory');

const beans = {
  description: 'Fetches a list of beans.',
  resolve: () => listBeans(beansRepositoryFactory()).execute(),
};

module.exports = { beans };
