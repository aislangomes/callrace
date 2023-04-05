const {Model, DataTypes} = require('sequelize')

class User extends Model {
  static init(sequelize){
    super.init({
      streetstart:DataTypes.STRING,
      streetend:DataTypes.STRING,
      paymentmethod:DataTypes.STRING     
    }, {sequelize})
  }
}

module.exports = User