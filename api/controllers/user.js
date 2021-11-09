const express = require('express');
const router = express.Router();
const db = require('../models');
const { User } = db;

// This is a simple example for providing basic CRUD routes for
// a resource/model. It provides the following:
//    GET    /posts
//    POST   /posts
//    GET    /posts/:id
//    PUT    /posts/:id
//    DELETE /posts/:id 

// There are other styles for creating these route handlers, we typically
// explore other patterns to reduce code duplication.
// TODO: Can you spot where we have some duplication below?


//used to create an account
router.post('/', (req, res) => {
  let { content } = req.body;
  console.log("TESTING")
  console.log(req.body)
  User.create(req.body)
    .then(post => {
      res.status(201).json(post);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

//to log in
router.get('/login/:name/:password', (req, res) => {
  const user_name = req.params.name;
  const password = req.params.password;
  console.log("TESTING")
  console.log(user_name)
  console.log(password)
  User.findOne({where : {user_name: user_name}})
    .then((data)=> {
      console.log("USER: " + data.name);
      console.log("PASSWORD: " + data.password);
      if(data.password === password){
        res.status(200).send(data);
      }else{
        console.log("error")
        res.status(400).send(false);
      }
    })
    .catch(err => {
      console.log("error1")
      res.status(402).json(err);
    });  
});




module.exports = router;