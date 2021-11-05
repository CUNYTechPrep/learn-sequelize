const { Genre } = require('./models');
const { Movie } = require('./models');
const { Actor } = require('./models');

/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
function insertNewGenre() {

  let g = Genre.build();

  g.name = "Thriller";

  return g.save()

}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {

  return Movie.create({title: 'Candyman', year: '2021'})

}

/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  
  return Movie.findByPk(2)

    .then(movie => {

      return movie.get('title');

    });

}

/*
  Return an array of all the actor names
*/
function getAllActors() {

  return Actor.findAll( {attributes: ["name"]})
  .then( actors => {

    return actors.map(arg => arg.name);

  });

}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {

  return Movie

    .findAll( {where: { year: 2008 } } )

    .then(( movies ) =>{

      return movies.map( (m) => m.title);

    });

}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {

  return Genre.findOne({where : {name: "Thriller"}})
  .then((g) => {

    return g.destroy();

  })

}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {

  let moviePromise = Movie.findOne( { where: { title: "Eagle Eye"}});

  let actorPromise = Actor.findOne( { where: { name: "Rosaro Dawson"}});

  return Promise
    .all( [ moviePromise, actorPromise])
    
    .then (([movieResult, actorResult]) => {

      return movieResult.addActor(actorResult);

    })

}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
function associateRobertToTropicThunder() {

  let robert = await Actor.findOne( {where: {name: "Robert Downey Jr."}});

  let movie = await Movie.findOne({where: {title: "Tropic Thunder"}});

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
