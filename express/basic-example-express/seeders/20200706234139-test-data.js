'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('HairColors', [
      { color: 'Auburn' },
      { color: 'Black' },
      { color: 'Blonde' },
      { color: 'Brown' },
      { color: 'Other' },
      { color: 'Red' },
      { color: 'White' }
    ])
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
