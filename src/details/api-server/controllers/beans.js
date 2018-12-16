'use strict';

const get = (request, response) => {
  // use case here
  response.send(['Bruna bönor', 'Yin och Yang', 'Berlotti']);
};

module.exports = {
  get,
};
