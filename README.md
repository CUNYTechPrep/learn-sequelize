# Learning Sequelize.js

This repository contains a sample database of Movies, Actors, and Genres. It uses the sequelize.js library to create database models. In this repo we will be learning how to use sequelize.js by implementing functions and making their tests pass. You can run the code and tests as follows:

```
# create the test database
createdb -h localhost -U ctp_user learn_sequelize

# clone this repo to your computer
npm install
npm test -- --watchAll
```

This will run all of the tests, and continuously re-run them as you implement the functions in the file `learn-sequelize.js`.

**Task:** Implement the functions in `learn-sequelize.js`

You can use the following resources to learn more about the Sequelize.js library.

## Data Types

https://sequelize.org/master/manual/model-basics.html#data-types

## Model Definition (How to create models)

https://sequelize.org/master/manual/model-basics.html#model-definition

> Use the `Extending Model` section

## Model Querying and Finders (How to query the DB)

https://sequelize.org/master/manual/model-querying-basics.html
https://sequelize.org/master/manual/model-querying-finders.html

- `.findByPk()`
- `.findOne()`
- `.findAll()`
- using WHERE: `{ where: { column: value }}`
- using AND/OR
- All Options for complex WHERE querying, limiting, ordering (sort)

## Working with a record Instance

https://sequelize.org/master/manual/model-instances.html

- `.create()`
- updating fields and `.save()`
- `.destroy()`

## Making and Using Model Associations

https://sequelize.org/master/manual/assocs.html
