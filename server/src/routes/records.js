const { USER_AUTH_SCHEME } = require('../constants/common');
const Records = require('../handlers/records');
const { recordIdParam, updateLikesPayload } = require('../joiSchema/records');

const getRecordsRoute = {
  method: 'GET',
  path: '/records',
  handler: Records.getRecords,
  options: {
    auth: {
      strategy: USER_AUTH_SCHEME
    },
    cors: {
      origin: ['http://localhost:3000']
    }
  }
};

const getLikesByRecordIdRoute = {
  method: 'GET',
  path: '/records/{id}/likes',
  handler: Records.getLikesByRecordId,
  options: {
    auth: {
      strategy: USER_AUTH_SCHEME,
    },
    validate: {
      params: recordIdParam,
    },
    cors: {
      origin: ['http://localhost:3000']
    }
  }
};

const updateLikesByRecordIdRoute = {
  method: 'PATCH',
  path: '/records/{id}/likes',
  handler: Records.updateLikesByRecordId,
  options: {
    auth: {
      strategy: USER_AUTH_SCHEME
    },
    validate: {
      params: recordIdParam,
      payload: updateLikesPayload
    },
    cors: {
      origin: ['http://localhost:3000']
    }
  }
};

module.exports = {
  recordsRoutes: [
    getRecordsRoute,
    getLikesByRecordIdRoute,
    updateLikesByRecordIdRoute
  ],
  getRecordsRoute,
  getLikesByRecordIdRoute,
  updateLikesByRecordIdRoute
};
