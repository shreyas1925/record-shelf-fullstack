const Boom = require('@hapi/boom');
const models = require('../../models');
const { RECORD_NOT_FOUND_ERROR } = require('../constants/errors');

const getRecords = async (request, h) => {
  const records = await models.records.findAll({
    attributes: ['id', 'name', 'imageUrl'],
    include: [
      {
        model: models.artists,
        attributes: ['id', 'name'],
      },
      {
        model: models.genres,
        attributes: ['id', 'name'],
      }
    ]
  });
  return h.response({ data: records });
};

const getLikesByRecordId = async (request, h) => {
  const { id: recordId } = request.params;
  const record = await models.records.findByPk(recordId);
  if (!record) {
    throw Boom.badRequest(RECORD_NOT_FOUND_ERROR);
  }
  const likesByRecordId = await models.likes.findAll({
    attributes: ['id', 'userId'],
    where: {
      isLiked: true
    },
    include: [
      {
        model: models.records,
        attributes: [],
        where: {
          id: recordId
        }
      }
    ]
  });
  const { id: userId } = request.auth.credentials;
  return h.response({
    data: {
      count: likesByRecordId.length,
      like: likesByRecordId.some((like) => like.userId === userId)
    }
  });
};

const updateLikesByRecordId = async (request, h) => {
  const { id: recordId } = request.params;
  const record = await models.records.findByPk(recordId);
  if (!record) {
    throw Boom.badRequest(RECORD_NOT_FOUND_ERROR);
  }

  const likesByRecordId = await models.likes.findAll({
    attributes: ['id', 'userId', 'isLiked'],
    include: [
      {
        model: models.records,
        attributes: [],
        where: {
          id: recordId
        }
      }
    ]
  });
  const { id: userId } = request.auth.credentials;
  const likeByRecordIdAndUserId = likesByRecordId.find((like) => like.userId === userId);

  let likeCountChange = request.payload.like ? 1 : -1;
  if (likeByRecordIdAndUserId) {
    if (likeByRecordIdAndUserId.isLiked === request.payload.like) {
      likeCountChange = 0;
    } else {
      await models.likes.update({
        isLiked: request.payload.like
      }, { where: { recordId, userId } });
    }
  } else {
    await models.likes.create({
      isLiked: request.payload.like,
      recordId,
      userId
    });
  }
  return h.response({
    data: {
      count: likesByRecordId.filter((like) => like.isLiked).length + likeCountChange,
      like: request.payload.like,
    }
  });
};

module.exports = {
  getRecords,
  getLikesByRecordId,
  updateLikesByRecordId
};
