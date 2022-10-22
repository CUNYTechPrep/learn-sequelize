const db = require("./models");
const { Genre, Movie, Actor } = db;

const GENRES = [
  { id: 1, name: "Action" },
  { id: 2, name: "Comedy" },
  { id: 3, name: "Drama" },
];

const MOVIES = [
  { id: 1, title: "Independence Day", year: 1996, genreId: 1 },
  { id: 2, title: "Men in Black II", year: 2002, genreId: 2 },
  { id: 3, title: "Seven Pounds", year: 2008, genreId: 3 },
  { id: 4, title: "Eagle Eye", year: 2008, genreId: 1 },
  { id: 5, title: "Tropic Thunder", year: 2008, genreId: 2 },
];

const ACTORS = [
  { id: 1, name: "Will Smith" },
  { id: 2, name: "Rosario Dawson" },
  { id: 3, name: "Robert Downey Jr." },
];

const MOVIES_ACTORS = [
  { movieId: 1, actorId: 1 },
  { movieId: 2, actorId: 1 },
  { movieId: 2, actorId: 2 },
  { movieId: 3, actorId: 1 },
  { movieId: 3, actorId: 2 },
];

const seed = () => {
  return db.sequelize
    .sync({ force: true })
    .then(() => {
      // Create all the entries
      let genrePromises = GENRES.map((g) => Genre.create(g));
      let moviePromises = MOVIES.map((m) => Movie.create(m));
      let actorPromises = ACTORS.map((a) => Actor.create(a));
      return Promise.all([
        ...genrePromises,
        ...moviePromises,
        ...actorPromises,
      ]);
    })
    .then(() => {
      // Create the associations
      let associationPromises = MOVIES_ACTORS.map((ma) => {
        let moviePromise = Movie.findByPk(ma.movieId);
        let actorPromise = Actor.findByPk(ma.actorId);
        return Promise.all([moviePromise, actorPromise]).then(
          ([movie, actor]) => {
            return movie.addActor(actor);
          }
        );
      });
      return Promise.all(associationPromises);
    })
    .then(() => {
      /*
        Postgres only fix:
          Since we provided fixed id's for our seed data,
          we have to reset our id sequences in postgres.
          (ONLY do this for Models with autoincrementing id's)
      */
      let genreReset = db.sequelize.query(
        `select setval('genres_id_seq', (select max(id) from genres), true);`
      );
      let movieReset = db.sequelize.query(
        `select setval('movies_id_seq', (select max(id) from movies), true);`
      );
      let actorReset = db.sequelize.query(
        `select setval('actors_id_seq', (select max(id) from actors), true);`
      );

      return Promise.all([genreReset, movieReset, actorReset]);
    });
};

module.exports = seed;
