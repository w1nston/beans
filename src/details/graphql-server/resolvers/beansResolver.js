'use strict';
const { listBeans } = require('../../../application/use-case/listBeans');
const { beansRepositoryFactory } = require('../../../interface-adapters/repository/beansRepositoryMemory');

const beans = () => listBeans(beansRepositoryFactory()).execute();

module.exports = { beans };
