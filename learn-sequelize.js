const { Actor, Genre, Movie } = require('./models');

/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
function insertNewGenre() {
  return Genre.create({name: 'col'});
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  return Movie.create({title: 'new movie', year:'2022', genreid:1});
}

/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  return Movie.findAll({
    attributes: ['title'],
    where:{
      id: '2'
    }
  }).then(movie => movie[0].title);
}

/*
  Return an array of all the actor names
*/
function getAllActors() {
  return Actor.findAll({
    attributes: ['name']
  }).then(actors => actors.map(a => a.name));
  
}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
  return Movie.findAll({
    attributes: ['title'],
    where:{
      year: '2008'
    }
  }).then(movies => movies.map(movie => movie.title));

}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
  /*return Genre.destroy({
    where :{
      name : 'col'
    }
  });*/
  return Genre.findOne({where: {name: "col"}})
    .then((g) => {
      return g.destroy();
    })
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {
  const moviePromise = Movie.findByPk(4);
  const actorPromise = Actor.findOne({where : {name: 'Rosario Dawson'}});

  return Promise
    .all( [ moviePromise, actorPromise] )
    .then(([movieResult, actorResult])=> {
      return movieResult.addActor(actorResult);
    });
}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
function associateRobertToTropicThunder() {
  const robert = await Actor.findOne({where: {name: "Robert Downey Jr."}});
  const movie = await Movie.findOne({where: {title : "Tropic Thunder"}});

  return movie.addActor(robert);
}

module.exports = {
  insertNewGenre,
  insertNewMovie,
  getMovieWithId2,
  getAllActors,
  getAllMoviesFrom2008,
  deleteGenreYouAdded,
  associateRosarioToEagleEye,
  associateRobertToTropicThunder,
};
