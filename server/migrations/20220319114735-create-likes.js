module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('likes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id',
          as: 'userId',
        }
      },
      is_liked: {
        type: Sequelize.BOOLEAN
      },
      record_id: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'records',
          key: 'id',
          as: 'recordId',
        }
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      }
    }, {
      uniqueKeys: {
        like_unique: {
          fields: ['user_id', 'record_id']
        }
      }
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('likes');
  }
};
