'use strict';
// TODO: Should be typescript interface
const bean = {
  name: '',
};

const createBeanFactory = () => ({
  create: name => ({ name }),
});

module.exports = { createBeanFactory };
