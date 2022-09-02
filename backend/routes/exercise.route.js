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
  router.route('/add').post((req, res) => {
    const { username, description } = req.body;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({ username, description, duration, date });

    // save to db
    newExercise
      .save()
      .then((exercise) => {
        const context = {
          msg: 'exercise added!',
          exercise,
        };
        res.json(context);
      })
      .catch((err) => {
        res.status(400).json(`error: ${err}`);
      });
  });

  return router;
};
