'use strict';
const { gql } = require('apollo-server');

const schema = gql`
  type Bean {
    name: String!
  }

  type Query {
    beans: [Bean]
  }
`; 

module.exports = { schema };
