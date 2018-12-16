'use strict';
const { defineRoutes } = require('./routes');

const port = process.env.PORT || 4000; // TODO: Handling of ports.

const app = defineRoutes();

let server = null;

const stopServer = () => {
  server.close(error => {
    if (error) {
      console.error(error);
      process.exit(1);
    }

    // TODO: Close connections and such here...
  });
};

const start = () => {
  // TODO: Handle logging properly.
  server = app.listen(port, () => {
    console.log(`Server started. Listening in on port ${port}`);
  });

  process.on('SIGINT', () => {
    console.log('SIGINT signal received.');
    stopServer();
  });
};

module.exports = {
  start,
};
