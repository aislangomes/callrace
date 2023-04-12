'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.createTable('drivers',{
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
        },
         namedriver:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        licenseplate:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        cartype:{
          type: Sequelize.STRING,
          allowNull: false,
        },
        iduser:{
          type: Sequelize.INTEGER,
          allowNull:false
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

     return queryInterface.dropTable('drivers');

  }
};
