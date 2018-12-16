'use strict';
const { beans } = require('./beans');

const resolvers = {
  Query: {
    beans,
  },
};

module.exports = { resolvers };
