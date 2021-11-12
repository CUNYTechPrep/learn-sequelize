const { Genre, Movie, Actor } = require('./models');

/*
  currently, the genre table only has 3 entries: Action, Comedy, and Drama
  Add one more Genre of your choice.
*/
function insertNewGenre() {
  return Genre.create({ name: 'Horror' });
}

/*
  currently, there are 5 movies
  Add one more Movie of your choice. But it CANNOT be from 2008.
*/
function insertNewMovie() {
  return Movie.create({ title: 'Random Movie', year: '2003', genreId: 1 })
}

/*
  Return the title of the movie with ID=2
*/
function getMovieWithId2() {

  return Movie.findByPk(2) // .findByPk uses the primary key to find single entry from table
   .then(movie => {return movie.title}); //can user movie.get('title') too

}

/*
  Return an array of all the actor names
*/
function getAllActors() {

  return Actor.findAll({attributes: ['name']})
  .then(actors => {return actors.map(actor => actor.name); 
  });

}

/*
  Return an array of all the movie names from 2008
*/
function getAllMoviesFrom2008() {
  return Movie.findAll({ where: {year: 2008}})
  .then(movies => {return movies.map(movie => movie.title);
  });
}

/*
  Delete the genre you added in the first test
*/
function deleteGenreYouAdded() {
  return Genre.destroy({
    where: {
      name: 'Horror'
    }
  });
  // FROM SOLUTION ANOTHER OPTION IS
//   return Genre
//     .findOne({where: { name: "SciFi"}})
//     .then((g) => {
//       return g.destroy();
//     })
// 
}

/*
  Rosario Dawson acted in the movie Eagle Eye.
  Add this association.
*/
function associateRosarioToEagleEye() {
  let moviePromise = Movie.findOne({where: {title: 'Eagle Eye'}});
  // if the movie id was know you could use .findByPk(4) with the key of that movie
  let actorPromise = Actor.findOne({where: {name: 'Rosario Dawson'}});

  return Promise
  .all([moviePromise, actorPromise])
  .then(([movieResult, actorResult]) => {
    return movieResult.addActor(actorResult); // Ask about .addActor() function
    // return actorResult.addActor(movieResult); // IS ALSO VALIE
  }) 
}

/*
  Robert Downey Jr. acted in the movie Tropic Thunder.
  Add this association.
*/
function associateRobertToTropicThunder() {
  let moviePro = Movie.findOne({where: {title: 'Tropic Thunder'}});
  let actorPro = Actor.findOne({where: {name: 'Robert Downey Jr.'}});

  return Promise
  .all([moviePro, actorPro])
  .then(([movieRes, actorRes]) => {
    return movieRes.addActor(actorRes);
  })
}

/*  ANOTHER WAY FROM SOULTION   */
// async function associateRobertToTropicThunder() {
//   // return Actor.findOne({where: {name: "Robert Downey Jr."}})
//   //   .then(robert => {
//   //     return Movie.findOne({where: {title: "Tropic Thunder"}})
//   //       .then(movie => {
//   //         return movie.addActor(robert);
//   //       })
//   //   })

//     let robert = await Actor.findOne({where: {name: "Robert Downey Jr."}});
//     let movie = await Movie.findOne({where: {title: "Tropic Thunder"}});

//     return movie.addActor(robert);
// }

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
