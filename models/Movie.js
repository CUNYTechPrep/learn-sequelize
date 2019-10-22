'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {}

  Movie.init({
    title: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      }
    },
    year: { type: DataTypes.INTEGER },
  }, {
    sequelize,
    modelName: 'movie'
  });

  Movie.associate = (models) => {
    // associations can be defined here

    // This will add genreId as a column to the Movie table
    models.Movie.belongsTo(models.Genre);

    // This will create a Many-to-Many relationship
    // It creates a new table (MovieActor) to hold movieId and actorId 
    // This will add methods getActors, setActors, addActor, addActors to Movie instances.
    models.Movie.belongsToMany(models.Actor, {through: 'MovieActor'});


    // This will add methods getMovies, setMovies, addMovie, and addMovies to Actor instances.
    // models.Actor.belongsToMany(models.Movie, {through: 'MovieActor'});
  };

  return Movie;
};