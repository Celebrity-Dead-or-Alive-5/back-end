const router = require('express').Router();
const Users = require('../models/celebModel');
const Celebs = require('../models/userModel');

//access protected user info

router.get('/users', (req, res) => {
    Users.find()
      .then(users => {
          res.json(users);
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to get users from database'});
      });
});

router.get(`/users/:id`, (req, res) => {
    const { id } = req.params;

    Users.findById(id)
      .then(user => {
          if(user) {
              res.json(user);
          } else {
              res.status(404).json({ message: 'could not find user with given id'});
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to get users from db'});
      });
});

//add points to a user
router.put('/users/:id', (req, res) => {
    const changes = req.body;
    console.log(req.body)
    const { id } = req.params;

    if (changes.score) {
        Users.addPoints(changes, id)
          .then(() => {
              res.status(200).json(changes);
          })
          .catch(err => {
              res.status(500).json({ message: 'error adding points to user'});
          });
    } else {
        res.status(400).json({ error: 'no changes to points total made'});
    };
});

//delete a user
router.delete('/users/:id', (req, res) => {
    const {id } = req.params;
    Users.remove(id)
      .then(deleted => {
          if (deleted) {
              res.json({ removed: deleted});
          } else {
              res.status(404).json({ error: 'could not find user with that id'});
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to delete user'})
      })
})

//add/update/delete celebrities

router.post('/celebs', (req, res) => {
    const celeb = req.body;
    
    Celebs.add(celeb)
      .then(saved => {
          res.status(201).json(saved);
      })
      .catch(err => {
          res.status(500).json({ message: 'unable to add celebrity to the database'});
      });
});

router.put('/celebs/:id', (req, res) => {
    const changes = req.body;
    const { id } = req.params;

    Celebs.findById(id)
      .then(celeb => {
          if (celeb) {
              Celebs.update(changes, id)
                .then(updatedCeleb => {
                    res.json(updatedCeleb);
                })
          } else {
              res.status(404).json({ error: 'could not find a celebrity with that id'});
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'failed to update celebrity'});
      });

});

router.delete('/celebs/:id', (req, res) => {
    const { id } = req.params;

    Celebs.remove(id)
      .then(deleted => {
          if (deleted) {
              res.json({ removed: deleted });
          } else {
              res.status(404).json({ error: 'could not find celebrity with that id'});
          }
      })
      .catch(err => {
          res.status(500).json({ message: 'could not delete that celebrity'});
      });
});

router.delete('/celebs', (req, res) => {
    Celebs.nuke()
      .then(deleted => {
          res.json({message: 'deleted celebrity db'})
      })
      .catch(err => {
          res.status(500).json({ message: 'could not delete celebrity db'});
      });
});





module.exports = router;
