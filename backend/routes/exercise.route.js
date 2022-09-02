const router = require('express').Router();
const Exercise = require('../models/exercise.model');

module.exports = (params) => {
  // all exercises
  router.route('/').get((req, res) => {
    Exercise.find()
      .then((exercises) => {
        res.json(exercises);
      })
      .catch((err) => {
        res.status(400).json(`error: ${err}`);
      });
  });

  // add exercise
  router.route('/').post((req, res) => {
    const { username, description } = req.body;
    const duration = number(req.body.duration);
    const date = Date.parse(req.body.date);

    // save to db
    const newExercise = new Exercise(username, description, duration, date);

    newExercise
      .save()
      .then(() => {
        res.json(`exercise added!`);
      })
      .catch((err) => {
        res.status(400).json(`error: ${err}`);
      });
  });

  return router;
};
