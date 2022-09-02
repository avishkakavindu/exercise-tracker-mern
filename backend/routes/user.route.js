const express = require('express').Router();
const User = require('../models/user.model');

module.exports = (params) => {
  // get all users
  router.route('/').get((req, res) => {
    User.find()
      .then((users) => {
        res.join(users);
      })
      .catch((err) => {
        res.status(400).json(`error: ${err}`);
      });
  });

  // add user
  router.route('/add').post((req, res) => {
    const username = req.body.username;

    const newUser = new User({ username });
    // save user to db
    newUser
      .save()
      .then(() => {
        res.json('user added!');
      })
      .catch((err) => {
        res.status(400).json(`error: ${err}`);
      });
  });

  return router;
};
