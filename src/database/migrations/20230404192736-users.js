'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('users',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
        streetstart:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        streetend:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        paymentmethod:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        searchdriver:{
          type: Sequelize.BOOLEAN,
          defaultValue: true,
        },
        created_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at:{
          type: Sequelize.DATE,
          allowNull: false,
        },
      });

  },

  down: (queryInterface, Sequelize) => {

     return queryInterface.dropTable('users');

  }
};
