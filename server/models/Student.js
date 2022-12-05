const { Model, DataTypes } = require('sequelize')

class Student extends Model {
  static init(sequelize) {
    super.init({
      nome: DataTypes.STRING,
      nota1: DataTypes.STRING,
      nota2: DataTypes.STRING
    }, {
      sequelize
    })
  }
}

module.exports = Student