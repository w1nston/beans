'use strict';

// TODO: Somewhere need for interface -> typescript!
const beansRepository = () => ({
  findAll: () => [
    { name: 'Berlotti' },
    { name: 'Bruna bönor' },
    { name: 'Yin och Yang' },
  ],
});

module.exports = { beansRepository };
