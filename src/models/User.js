const {Model, DataTypes} = require('sequelize')

class User extends Model {
  static init(sequelize){
    super.init({
      streetstart:DataTypes.STRING,
      streetend:DataTypes.STRING,
      paymentmethod:DataTypes.STRING,
      searchdriver: DataTypes.BOOLEAN     
    }, {sequelize})
  }
}

module.exports = User