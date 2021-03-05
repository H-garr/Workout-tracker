const router = require("express").Router();
const Workout = require("../models/excercise-workout");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
        console.log("Create",dbTransaction)
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body }, res) => {
  Workout.findByIdAndUpdate(req.paramas.id,
    {$push : {excercises : body}},
    {new:true})
    .then(dbTransaction => {
        console.log("PUT",dbTransaction)
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(dbTransaction => {
        console.log("GET",dbTransaction)
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .limit(15)
      .sort({ date: -1 })
      .then(dbTransaction => {
          console.log("GET",dbTransaction)
        res.json(dbTransaction);
      })
      .catch(err => {
        res.status(400).json(err);
      });
  });
module.exports = router;