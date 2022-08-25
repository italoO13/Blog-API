'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      displayName: {
        allowNull:false,
        type: Sequelize.STRING
      },
      email:{
        allowNull:false,
        type: Sequelize.STRING
      },
      password:{
        allowNull:false,
        type: Sequelize.STRING,
      },
      image:{
        allowNull:false,
        type: Sequelize.STRING
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Users');
  }
};
