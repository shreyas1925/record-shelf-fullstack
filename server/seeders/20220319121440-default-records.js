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
    await queryInterface.bulkInsert('artists', [{
      id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708',
      name: 'Maroon 5',
    }, {
      id: '8150acae-62fd-491e-bac4-06d074b3c7b4',
      name: 'Phillip Phillips',
    }, {
      id: '8cbcf3cd-672a-461f-8829-491ca1bc6330',
      name: 'Sachin-Jigar',
    }, {
      id: 'd88b45bd-a644-445d-bdb5-eaf8ac2e07ee',
      name: 'Tanishk Bagchi',
    }, {
      id: '8b14a0aa-f0b6-4dfd-a22f-0944f85d7a6e',
      name: 'Badshah',
    }, {
      id: '056e9a8b-e2a4-4585-aa7b-a45a994b31b5',
      name: 'Post Malone',
    }], {});

    await queryInterface.bulkInsert('genres', [{
      id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      name: 'Pop'
    }, {
      id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
      name: 'Country'
    }, {
      id: '5ddb1397-fcb8-4d5e-88ba-7a0ea6a84e91',
      name: 'Bollywood'
    }, {
      id: '95aec636-f7b5-46e7-8343-8203b1a03a90',
      name: 'Rock'
    }], {});

    await queryInterface.bulkInsert('records', [{
      id: '0e2ddccf-f494-4c41-a499-90f8267f491a',
      name: 'Beautiful Mistakes (feat. Megan Thee Stallion)',
      image_url: 'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
      genre_id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      artist_id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708'
    }, {
      id: '45e1d753-2986-43cb-9b9d-30c370056319',
      name: 'This Love',
      image_url: 'https://i.scdn.co/image/ab67616d0000b27317b3850d758fff5a2301e537',
      genre_id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      artist_id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708'
    }, {
      id: '8266dac3-b2b1-4551-b2ec-91e260244a51',
      name: 'Payphone',
      image_url: 'https://i.scdn.co/image/ab67616d0000b2733119f490f02fcee6514e8604',
      genre_id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      artist_id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708'
    }, {
      id: '94af94a3-9d47-4dd8-9b45-1c51a9443e96',
      name: 'Maps',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273442b53773d50e1b5369bb16c',
      genre_id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      artist_id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708'
    }, {
      id: 'cd3cc1e3-e1e0-4ccd-bc67-747648985838',
      name: 'Lost',
      image_url: 'https://i.scdn.co/image/ab67616d0000b27386a8ab515de4b7aef28cd631',
      genre_id: '128aa7f8-c943-48ce-b352-7edd26fa4c6e',
      artist_id: '496b0a85-2bfa-45bc-8d0f-57fe0ce55708'
    }, {
      id: '0530d74c-5dbc-4f1b-b3e2-7ada4520fb4c',
      name: 'Magnetic',
      image_url: 'https://i.scdn.co/image/ab67616d0000b27322d30dee7738733b99774f9b',
      genre_id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
      artist_id: '8150acae-62fd-491e-bac4-06d074b3c7b4'
    }, {
      id: '9b4227b2-0cb5-40ed-81cb-09b0577ac1dd',
      name: 'Home',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273d9009cc16eddbc6664508cd8',
      genre_id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
      artist_id: '8150acae-62fd-491e-bac4-06d074b3c7b4'
    }, {
      id: 'd495f3e6-f03d-44ce-a4d6-a02309bb8c88',
      name: 'Gone, Gone, Gone',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273d9009cc16eddbc6664508cd8',
      genre_id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
      artist_id: '8150acae-62fd-491e-bac4-06d074b3c7b4'
    }, {
      id: 'f12c86c0-df24-47cd-af02-ff0f6700d45a',
      name: 'So Easy',
      genre_id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
      artist_id: '8150acae-62fd-491e-bac4-06d074b3c7b4',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273bb7dac0075160938dd6c8799',
    },
    {
      id: 'f5ba1936-bebb-4375-8007-79e3b3d45d7b',
      name: 'Raging Fire',
      genre_id: '305202d2-b598-4c1b-a2bb-ca08bb65bad3',
      artist_id: '8150acae-62fd-491e-bac4-06d074b3c7b4',
      image_url: 'https://i.scdn.co/image/ab67616d0000b27304a86148a05884187f6e3151',
    },
    {
      id: '0d07b550-4c0a-4b78-b0e8-9d68afa57556',
      name: 'Kheench Te Nach (From "Chandigarh Kare Aashiqui")',
      genre_id: '5ddb1397-fcb8-4d5e-88ba-7a0ea6a84e91',
      artist_id: '8cbcf3cd-672a-461f-8829-491ca1bc6330',
      image_url: 'https://i.scdn.co/image/ab67616d0000b2731f3174387d35b946c4c25e19',
    },
    {
      id: '6ae8a36a-20b8-419c-a34d-957dd259894b',
      name: 'Bansuri (From "Hum Do Hamare Do")',
      genre_id: '5ddb1397-fcb8-4d5e-88ba-7a0ea6a84e91',
      artist_id: '8cbcf3cd-672a-461f-8829-491ca1bc6330',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273017e042d145c5a7c9428d32e',
    },
    {
      id: '7549c637-d2b2-4f1e-a411-9eba8f881c5e',
      name: 'Najaa (From "Sooryavanshi")',
      genre_id: '5ddb1397-fcb8-4d5e-88ba-7a0ea6a84e91',
      artist_id: 'd88b45bd-a644-445d-bdb5-eaf8ac2e07ee',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273779e80010d48e9848669512c',
    },
    {
      id: 'c5a9e3c5-16a2-42dc-9a1a-4d6538f7f273',
      name: 'Chandigarh Kare Aashiqui Title Track (From "Chandigarh Kare Aashiqui")',
      genre_id: '5ddb1397-fcb8-4d5e-88ba-7a0ea6a84e91',
      artist_id: '8cbcf3cd-672a-461f-8829-491ca1bc6330',
      image_url: 'https://i.scdn.co/image/ab67616d0000b27397f046560a115e4b05c8daaa',
    },
    {
      id: 'd5243f60-544b-4544-aa08-6759dc7ae340',
      name: 'Bad Boy X Bad Girl (feat. Nikhita Gandhi)',
      genre_id: '5ddb1397-fcb8-4d5e-88ba-7a0ea6a84e91',
      artist_id: '8b14a0aa-f0b6-4dfd-a22f-0944f85d7a6e',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273cec99b43df372b68b6648f81',
    },
    {
      id: '17e72576-1451-41dd-8859-b4f380347354',
      name: "Takin' Shots",
      genre_id: '95aec636-f7b5-46e7-8343-8203b1a03a90',
      artist_id: '056e9a8b-e2a4-4585-aa7b-a45a994b31b5',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268',
    },
    {
      id: '1d621785-aad9-4c7d-91ed-60ceccb01ca6',
      name: 'Over Now',
      genre_id: '95aec636-f7b5-46e7-8343-8203b1a03a90',
      artist_id: '056e9a8b-e2a4-4585-aa7b-a45a994b31b5',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268',
    },
    {
      id: '25df58b1-d13f-4643-a0b2-4e42b6921166',
      name: 'On The Road (feat. Meek Mill & Lil Baby)',
      genre_id: '95aec636-f7b5-46e7-8343-8203b1a03a90',
      artist_id: '056e9a8b-e2a4-4585-aa7b-a45a994b31b5',
      image_url: 'https://i.scdn.co/image/ab67616d0000b2739478c87599550dd73bfa7e02',
    },
    {
      id: '3de5e2b0-c0a4-4f72-9147-559f2e3844c5',
      name: 'Sugar Wraith',
      genre_id: '95aec636-f7b5-46e7-8343-8203b1a03a90',
      artist_id: '056e9a8b-e2a4-4585-aa7b-a45a994b31b5',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268',
    },
    {
      id: '4949a705-b544-4985-8b45-7fb102c38aa6',
      name: 'Paranoid',
      genre_id: '95aec636-f7b5-46e7-8343-8203b1a03a90',
      artist_id: '056e9a8b-e2a4-4585-aa7b-a45a994b31b5',
      image_url: 'https://i.scdn.co/image/ab67616d0000b273b1c4b76e23414c9f20242268',
    }], {});
  },

  async down(queryInterface) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('records', null, {});
    await queryInterface.bulkDelete('genres', null, {});
    await queryInterface.bulkDelete('artists', null, {});
  }
};
