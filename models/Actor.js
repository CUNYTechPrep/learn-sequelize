'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Actor extends Model {}

  Actor.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        len: [3, 250],
        notEmpty: true,
      },
      unique: true,
    },
  }, {
    sequelize,
    modelName: 'actor'
  });

  Actor.associate = (models) => {
    // associations can be defined here

    // This will add methods getMovies, setMovies, addMovie, and addMovies to Actor instances.
    models.Actor.belongsToMany(models.Movie, {through: 'MovieActor'});
  };

  return Actor;
};