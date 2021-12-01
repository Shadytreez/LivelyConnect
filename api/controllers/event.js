const express = require('express');
const router = express.Router();
const db = require('../models');
const { Event } = db;

// Retrieve all events
router.get('/', (req,res) => {
    Event.findAll({})
      .then(posts => res.json(posts));
  });
  

// // get all the event for EventListPage
// router.get('/allEventOpen', (req, res) => {
//   console.log("TESTTTTTTTTTTTTTTTTT")
//   Event.findAll({})
//     .then(posts => res.json(posts));
// });  

// Get event with that event name
router.get('/:id', (req, res) => {
    const { id } = req.params;
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
    console.log("TEST")
    Event.create({
      eventName: req.body.eventName,
      activityType: req.body.activityType,
      description: req.body.description,
      dateTime: req.body.dateTime,
      zoomLink: req.body.zoomLink,
      bannerImg: req.body.bannerImg,
      isOpen : req.body.isOpen,
      hostUserName : req.body.hostUserName
    })
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
    Event.findByPk(id)
      .then(post => {
        if(!post) {
          return res.sendStatus(404);
        }
  
        post.destroy();
        res.sendStatus(204);
      });
  });




  // router.get('/test', (req, res) => {
  //   console.log("TESTTTTTTTTTTTTTTTTT")
  //   Event.findAll().then((data) => {
  //     res.send(data);
  //   }).catch(err => {
  //   res.status(400).json(err);
  //   });  
  // });

module.exports = router;