'use strict';
import { gql } from 'apollo-server';

export const schema = gql`
  type Bean {
    name: String!
  }

  type Query {
    beans: [Bean]
  }
`; 
