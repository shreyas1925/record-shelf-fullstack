module.exports = {
  async up(queryInterface) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('likes', [{
      user_id: 1,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 2,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 3,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 4,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 5,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 6,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 7,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 8,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 9,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 10,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 11,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 12,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 13,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 14,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 15,
      record_id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      is_liked: true
    }, {
      user_id: 13,
      record_id: '45e1d753-2986-43cb-9b9d-30c370056319',
      is_liked: true
    }, {
      user_id: 14,
      record_id: '45e1d753-2986-43cb-9b9d-30c370056319',
      is_liked: true
    }, {
      user_id: 15,
      record_id: '45e1d753-2986-43cb-9b9d-30c370056319',
      is_liked: true
    }, {
      user_id: 1,
      record_id: '94af94a3-9d47-4dd8-9b45-1c51a9443e96',
      is_liked: true
    }]);
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('likes', null, {});
  }
};
