'use strict';
const { beans } = require('./beansResolver');

const resolvers = {
  Query: {
    beans,
  },
};

module.exports = { resolvers };
