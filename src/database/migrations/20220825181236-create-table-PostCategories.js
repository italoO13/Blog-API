'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.createTable('PostCategories', { 
      postId: {
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references:{
          model:'BlogPosts',
          key:'id'
        },
        type: Sequelize.INTEGER,
      },
      categoryId:{
        primaryKey: true,
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        references:{
          model: 'Categories',
          key:'id'
        },
        type: Sequelize.INTEGER,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('PostCategories');
  }
};
