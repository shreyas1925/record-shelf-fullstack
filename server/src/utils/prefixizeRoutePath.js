const { API_PREFIX } = require('../constants/common');

const prefixizeRoutePath = (route) => ({
  ...route,
  path: `${API_PREFIX}${route.path}`,
});

module.exports = prefixizeRoutePath;
