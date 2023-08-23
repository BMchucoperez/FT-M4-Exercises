const { DataTypes } = require('sequelize');

module.exports = sequelize => {
  sequelize.define('Ability', {
    name: {
      type: DataTypes.STRING, // Con STRING me limita a 255 caracteres como maximo
      allowNull: false,
      unique: 'compositeIndex'
    },
    description: {
      type: DataTypes.TEXT, // Con TEXT no hay limite
    },
    mana_cost: {
      type: DataTypes.FLOAT,
      allowNull: false,
      unique: 'compositeIndex',
      validate: {
        min: 10.0,
        max: 250.0
      }
    },
    // summary: {
    //   type: DataTypes.VIRTUAL,
    //   get(){
    //     return `${this.name}(${Math.floor(this.mana_cost)}points of mana) - Description: ${this.description}`
    //   }
    // }
  });
};