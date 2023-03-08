'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        order_details: 'Sample order details 1',
        total: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 1,
        order_details: 'Sample order details 2',
        total: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        order_details: 'Sample order details 3',
        total: 300,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
