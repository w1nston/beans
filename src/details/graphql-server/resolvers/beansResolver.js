'use strict';
const { listBeans } = require('../../../application/use-case/listBeans');
const { beansRepositoryFactory } = require('../../../data/repository/beansRepositoryMemory');
// TODO: This should probably be beansRepositoryMemory...

const beans = () => listBeans(beansRepositoryFactory()).execute();

module.exports = { beans };
