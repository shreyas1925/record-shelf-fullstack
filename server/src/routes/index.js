const { pingRoutes } = require('./ping');
const { recordsRoutes } = require('./records');
const prefixizeRoutePath = require('../utils/prefixizeRoutePath');

const routes = [
  ...pingRoutes,
  ...recordsRoutes,
];

module.exports = routes.map(prefixizeRoutePath);
