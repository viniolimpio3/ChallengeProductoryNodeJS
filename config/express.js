const express    = require('express');
const bodyParser = require('body-parser');
const config     = require('config');

module.exports = () => {
  const app = express();

  app.set('port', config.get('server.port'));

  app.use(bodyParser.json());

  return app;
};