const router = require('express').Router();
const bcrypt = require('bcryptjs');
const generateToken = require('./auth/generateToken');
const Users = require('../api/models/userModel');
const Celebs = require('../api/models/celebModel')

//register
router.post('/register', (req, res) => {
    const user = req.body;
    const hash = bcrypt.hashSync(user.password, 14);
    user.password = hash;

    Users.add(user)
      .then(saved => {
          res.status(201).json(saved);
      })
      .catch(err => {
          res.status(500).json({ message: 'unable to add user to database'});
      });
});

//login
router.post('/login', (req, res) => {
    const {username, password } = req.body;

    Users.findBy({ username })
      .first()
      .then(user => {
          if(user && bcrypt.compareSync(password, user.password)) {
              const token = generateToken(user);

              res.status(200).json({
                  message: `Welcome, ${user.username}!`,
                  token: token,
                  id: user.id
              });
          } else {
              res.status(401).json({ error: 'invalid user/pass'});
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'unable to log user into system'});
      });
});

//GET celeb info

router.get('/celebs', (req, res) => {
    Celebs.find()
      .then(celebs => {
          res.json(celebs);
      })
      .catch(err => {
          res.status(500).json({ message: 'Could not retrieve celebs from database'});
      });
});

router.get('/celebs/:id', (req, res) => {
    const { id } = req.params;

    Celebs.findById(id)
      .then(celeb => {
          if(celeb) {
              res.json(celeb);
          } else {
              res.status(404).json({ message: 'could not find celeb with given id'});
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to get celebs from database'});
      });
});

module.exports = router;