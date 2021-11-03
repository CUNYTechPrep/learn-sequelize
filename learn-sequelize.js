const { Genre } = require('./models');
const { Movie } = require('./models');
const { Actor } = require('./models');

/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
function insertNewGenre() {
  return Genre.create({name: "Foreign"});
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  return Movie.create({title: "Scarlet Witch", year: 2020});
}
/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {
  return Movie.findByPk(2).then(movie => {
    return movie.get('title');
  });
  // return Movie.findOne({
  //   where: {
  //     ID: 2
  //   }
  // });
}

/*
  Return an array of all the actor names
*/
function getAllActors() {
    return Actor.findAll({attributes: ['name']}).then(actors => {
      return actors.map(arg => arg.name);
    });
}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
  return Movie.findAll({
    where: {
      year: 2008
    }
  }).then((movies) => {
    return movies.map((m) =>m.title);
  });
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
  return Genre.destroy({where: {name: "Foreign"}})
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {
    let movieProm = Movie.findByPk(4); 
    let actorProm = Actor.findOne({where: {name : "Rosario Dawson"}});

    return Promise.all([movieProm, actorProm])
    .then(([movieRes, actorRes]) => {
      return movieRes.addActor(actorRes);
    })
}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
async function associateRobertToTropicThunder() {
    let rdj = await Actor.findOne({where: {name: "Robert Downey Jr."}});
    let TropicThunder = await Movie.findOne({where: {title: "Tropic Thunder"}});

    return TropicThunder.addActor(rdj);
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
