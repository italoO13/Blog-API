'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('BlogPosts', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
      },
      title: {
        allowNull:false,
        type: Sequelize.STRING
      },
      content:{
        allowNull:false,
        type: Sequelize.STRING
      },
      userId:{
        allowNull:false,
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        foreignKey: true,
        references:{
          model:'Users',
          key:'id'
        },
        type: Sequelize.INTEGER
      },
      createAt:{
        type: Sequelize.DATE,
        allowNull: false,
        field: 'published'
      },
      updatedAt:{
        type: Sequelize.DATE,
        allowNull: false,
        field: 'updated'
      }
    });

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('BlogPosts');
  }
};
