const express = require('express');
const router = express.Router();
const db = require('../models');
const { Event } = db;

// Retrieve all events
router.get('/', (req,res) => {
    Post.findAll({})
      .then(posts => res.json(posts));
  });
  
// Get event with that event name
router.get('/:id', (req, res) => {
    const { id } = req.params.id;
    Event.findByPk(id)
        .then(post => {
            if(!post) {
                return res.sendStatus(404);
            }
            res.json(post);
        });
});

// Creating an event
router.post('/', (req, res) => {
    let { content } = req.body;

    Event.create({ content })
      .then(post => {
        res.status(201).json(post);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });

  // delete the event
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    Post.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }
  
        post.destroy();
        res.sendStatus(204);
      });
  });

module.exports = router;