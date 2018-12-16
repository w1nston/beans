'use strict';
const { listBeans } = require('../../../application/use-case/listBeans');
const { beansRepository } = require('../../../application/repository/beans');

const beans = () => listBeans(beansRepository).execute();

module.exports = { beans };
