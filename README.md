# Learning Sequelize.js

This repository contains a sample database of Movies, Actors, and Genres. It uses the sequelize.js library to create database models. In this repo we will be learning how to use sequelize.js by implementing functions and making their tests pass. You can run the code and tests as follows:

```
# clone this repo to your computer
npm install
npm test -- --watch
```

This will run all of the tests, and continuously re-run them as you implement the functions in the file `learn-sequelize.js`.

**Task:** Implement the functions in `learn-sequelize.js`

You can use the following resources to learn more about the Sequelize.js library.

## Data Types

https://sequelize.org/v5/manual/data-types.html

## Model Definition (How to create models)

https://sequelize.org/v5/manual/models-definition.html

## Model Usage (How to query the DB)

https://sequelize.org/v5/manual/models-usage.html

- `.findByPk()`
- `.findOne()`
- `.findAll()`
- using WHERE `{ where: { column: value }}`
- using AND/OR: https://sequelize.org/v5/manual/models-usage.html#complex-filtering---or---not-queries
- All Options for complex WHERE querying, limiting, ordering (sort) https://sequelize.org/v5/manual/querying.html

## Working with a record Instance

https://sequelize.org/v5/manual/instances.html

- `.create()`
- updating fields and `.save()`
- `.destroy()`

## Making and Using Model Associations

https://sequelize.org/v5/manual/associations.html
