module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('records', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      image_url: {
        type: Sequelize.STRING
      },
      genre_id: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'genres',
          key: 'id',
          as: 'genreId',
        }
      },
      artist_id: {
        type: Sequelize.STRING,
        onDelete: 'CASCADE',
        references: {
          model: 'artists',
          key: 'id',
          as: 'artistId',
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
    });
  },
  async down(queryInterface) {
    await queryInterface.dropTable('records');
  }
};
