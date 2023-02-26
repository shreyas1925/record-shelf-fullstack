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

    await queryInterface.bulkInsert('users', [{
      id: 1,
      name: 'Aishwarya N',

    }, {
      id: 2,
      name: 'Aishwarya S R',

    }, {
      id: 3,
      name: 'Jigisha Kamal',

    }, {
      id: 4,
      name: 'Kiran Yadav',

    }, {
      id: 5,
      name: 'Lavanya A M',

    }, {
      id: 6,
      name: 'Nandika Arora',

    }, {
      id: 7,
      name: 'Palak Agarwal',

    }, {
      id: 8,
      name: 'Poorna Athreya',

    }, {
      id: 9,
      name: 'Ritika Tyagi',

    }, {
      id: 10,
      name: 'Sara Jain',

    }, {
      id: 11,
      name: 'Shwethaa R',

    }, {
      id: 12,
      name: 'Tanvi Chopra',

    }, {
      id: 13,
      name: 'Twissa Modi',

    }, {
      id: 14,
      name: 'Vriti Satija',
    }, {
      id: 15,
      name: 'Yashi Misra',

    }], {});
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  }
};
