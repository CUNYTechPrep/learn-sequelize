'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {}

  Genre.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      },
      unique: true
    },
  }, {
    sequelize,
    modelName: 'genre'
  });

  Genre.associate = (models) => {
    // associations can be defined here

    // This will add genreId to the Movie model and table
    models.Genre.hasMany(models.Movie)
  };

  return Genre;
};