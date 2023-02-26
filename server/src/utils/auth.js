const Boom = require('@hapi/boom');
const { NO_AUTH_ERROR, USER_UNAUTHORIZED_ERROR } = require('../constants/errors');
const models = require('../../models');
require('dotenv').config();

const authScheme = (server) => ({
  authenticate: async (request, h) => {
    try {
      const authorization = request.headers.authorization || null;
      if (authorization === null) {
        server.logger.error(NO_AUTH_ERROR);
        return h.unauthenticated(Boom.unauthorized());
      }
      const authorizationSplitAtSpace = authorization.split(' ');
      if (authorizationSplitAtSpace.length === 2) {
        const userNameInAuthorization = Buffer.from(authorizationSplitAtSpace[1], 'base64').toString('ascii');
        const user = await models.users.findOne({
          where: {
            name: userNameInAuthorization
          },
        });
        if (user) {
          return h.authenticated({
            credentials: {
              id: user.dataValues.id, name: user.dataValues.name
            }
          });
        }
      }
      server.logger.error(USER_UNAUTHORIZED_ERROR);
      return h.unauthenticated(Boom.unauthorized());
    } catch (e) {
      server.logger.error(e.message);
      return h.unauthenticated(Boom.unauthorized());
    }
  },
});
module.exports = { authScheme };
