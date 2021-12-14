const express = require('express');
const router = express.Router();
const db = require('../models');
const { Attending } = db;

//when a user rsvp
router.post('/', (req, res) => {
    let { content } = req.body;
    console.log("TEST")
    Attending.create({
        user_name: req.body.user_name,
        name: req.body.name,
        user_linkedIn: req.body.user_linkedIn,
        user_image: req.body.user_image,
        event_id: req.body.event_id
    })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //to get all user that rsvp for the event
  router.get('/:id', (req, res) => {
    let { content } = req.body;
    const id = req.params.id;
    console.log("TEST")
    Attending.findAll({
        where: {
            event_id: id
        }
    })
      .then(data => {
        res.send(data);
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //to get the user that is viewing the page to let know if they are rsvp
  router.get('/', (req, res) => {
    let { content } = req.body;

    console.log("TEST")
    Attending.findOne({
        where: {
            user_name: req.body.user_name,
            event_name: req.body.event_name
        }
    })
      .then(post => {
        res.send(data);
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  //for when user want to unRSVP
  router.get('/', (req, res) => {
    let { content } = req.body;

    console.log("TEST")
    Attending.destroy({
        where: {
            user_name: req.body.user_name,
            event_name: req.body.event_name
        }
    })
      .then(post => {
        res.send(data);
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  module.exports = router;