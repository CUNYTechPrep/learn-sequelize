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

const seed = async () => {
  await db.sequelize.sync({ force: true });

  // create all entries (genres must be done first)
  await Promise.all(GENRES.map((g) => Genre.create(g)));
  await Promise.all(MOVIES.map((m) => Movie.create(m)));
  await Promise.all(ACTORS.map((a) => Actor.create(a)));

  // Create the associations
  let associationPromises = MOVIES_ACTORS.map(async (ma) => {
    let moviePromise = Movie.findByPk(ma.movieId);
    let actorPromise = Actor.findByPk(ma.actorId);
    const [movie, actor] = await Promise.all([moviePromise, actorPromise]);
    return await movie.addActor(actor);
  });
  await Promise.all(associationPromises);

  /*
    Postgres only fix:
      Since we provided fixed id's for our seed data,
      we have to reset our id sequences in postgres.
      (ONLY do this for Models with autoincrementing id's)
  */
  let genreReset = db.sequelize.query(
    `select setval('"Genres_id_seq"', (select max(id) from "Genres"), true);`
  );
  let movieReset = db.sequelize.query(
    `select setval('"Movies_id_seq"', (select max(id) from "Movies"), true);`
  );
  let actorReset = db.sequelize.query(
    `select setval('"Actors_id_seq"', (select max(id) from "Actors"), true);`
  );

  return await Promise.all([genreReset, movieReset, actorReset]);
};

module.exports = seed;
