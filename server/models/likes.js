const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Likes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Likes.belongsTo(models.users, {
        foreignKey: 'userId',
        onDelete: 'CASCADE'
      });
      Likes.belongsTo(models.records, {
        foreignKey: 'recordId',
        onDelete: 'CASCADE'
      });
    }
  }
  Likes.init({
    userId: {
      field: 'user_id',
      type: DataTypes.INTEGER,
    },
    isLiked: {
      field: 'is_liked',
      type: DataTypes.BOOLEAN,
    },
    recordId: {
      field: 'record_id',
      type: DataTypes.STRING,
    },
    createdAt: {
      field: 'created_at',
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updatedAt: {
      field: 'updated_at',
      allowNull: false,
      type: DataTypes.DATE,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  }, {
    sequelize,
    modelName: 'likes',
  });
  return Likes;
};
