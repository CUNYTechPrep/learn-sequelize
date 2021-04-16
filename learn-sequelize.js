const { Genre, Movie, Actor } = require('./models');

/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
function insertNewGenre() {
  return Genre.create({name: "Fantasy"});
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  return Movie.create({title: "Wreck-It Ralph", year: 2012, genreId: 2});
}

/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  // return Movie.findByPk(2).then(movie => movie.title);
  return Movie.findOne({ where: {id: 2} }).get("title");
}

/*
  Return an array of all the actor names
*/
function getAllActors() {
  // return Actor.findAll().then(actorList => {
  //   return actorList.map(actor => actor.name);
  // })
  return Actor.findAll().map(allactors => allactors.get("name"));
}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
  // return Movie.findAll({where: { year: 2008}}).then(movieList => {
  //   return movieList.map(mL => mL.title);
  // })
  return Movie.findAll({
    where: {year: 2008}
  }).map(all2008movies => all2008movies.get("title"));
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
  return Genre.destroy({
    where: {
      name: "Fantasy"
    }});
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {
  // return Actor.findOne( {where: {name: "Rosario Dawson"}}).then(actorRD => {
  //   return Movie.findOne( {where: {title: "Eagle Eye"}}).then(movieEE => {
  //     return movieEE.addActor(actorRD);
  //   })
  // })

  let actorPromise = Actor.findOne({where: {name: "Rosario Dawson"}});
  let moviePromise = Movie.findOne({where: {title: "Eagle Eye"}});
  return Promise.all([actorPromise, moviePromise])
    .then(([actor, movie]) => {
      return actor.addMovie(movie);
    })
}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
function associateRobertToTropicThunder() {
  let actorPromise = Actor.findOne({where: {name: "Robert Downey Jr."}});
  let moviePromise = Movie.findOne({where: {title: "Tropic Thunder"}});
  return Promise.all([actorPromise, moviePromise])
    .then(([actor, movie]) => {
      return actor.addMovie(movie);
    })
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
