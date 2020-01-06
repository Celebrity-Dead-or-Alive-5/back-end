const db = require("./models/userModel.js");
const bcjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const router = require("express").Router();

router.post(
  "/add",
  authBody,
   (req, res) => {
    const creds = req.body;

    
    db.addCeleb(creds)
      .then(celeb => {
        res.status(201).json(celeb[0]);
      })
      .catch(err => {
        res
          .status(500)
          .json({ message: "Error adding a new celeb to the database" });
      });
  }
);

router.get("/fetch", (req, res) => {
   db.findBy({ id })
    .then(celeb => {
         res.status(200).json({
          celeb   
             });
      } else {
        res.status(401).json({ message: "Invalid credentials" });
      }
    })
    .catch(err => {
      res.status(500).json({ message: "Error logging in" });
    });
});

////////////////////////////////////////////////////////////////////////

function authBody(req, res, next) {
  Object.entries(req.body).length > 0
    ? next()
    : res.status(400).json({ message: "Request is missing body" });
}


module.exports = router;