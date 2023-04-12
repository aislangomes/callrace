const {Model, DataTypes} = require('sequelize')

class Driver extends Model {
  static init(sequelize){
    super.init({
      namedriver:DataTypes.STRING,
      licenseplate:DataTypes.STRING,
      cartype:DataTypes.STRING,
      iduser:DataTypes.INTEGER  
    }, {sequelize})
  }
}

module.exports = Driver