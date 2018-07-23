'use strict'

module.exports = (sequelize, DataTypes) => {
  const something = sequelize.define('something', {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4
    }
  }, { 
    paranoid: true,
    underscored: true
  });

  return something;
};
