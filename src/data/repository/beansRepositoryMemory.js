'use strict';
const { createBeanFactory } = require('../../application/entity/bean');

const beanFactory = createBeanFactory();
// TODO: import interface for beansRespository here.
const beans = [];

beans.push(beanFactory.create('Berlottie'));
beans.push(beanFactory.create('Bruna bönor'));
beans.push(beanFactory.create('Svarta bönor'));
beans.push(beanFactory.create('Yin och Yang'));

// TODO: name it factory?
const beansRepositoryFactory = () => ({
  findAll: () => beans,
})

module.exports = { beansRepositoryFactory };
