const router = require("express").Router();
const userRouter = require("./routes/userRouter.js");
const celebRouter = require("./routes/celebRouter.js");

router.use("/users", userRouter);
router.use("/celebs", celebRouter);

router.get("/", (req, res) => {
  res.send("No comprende.");
});

module.exports = router;