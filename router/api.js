const router = require("express").Router();
const Workout = require("../models/exercise-workout");

router.post("/api/workouts", ({ body }, res) => {
  Workout.create(body)
    .then(dbTransaction => {
        console.log("Create -post",dbTransaction)
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(params.id,
    {$push : {exercises : body}},
    {new:true})
    .then(dbTransaction => {
        console.log("PUT",dbTransaction)
      res.json(dbTransaction);
    })
    .catch(err => {
      console.log("Error",err)
      res.status(400).json(err);
    });
});
router.get('/api/workouts', (req, res) => {
  Workout.aggregate([
    {
      $addFields: {
        totalDuration: {
          $sum: '$exercises.duration',
        },
      },
    },
  ])
    .then((dbTransaction) => {
      res.json(dbTransaction);
    })
    .catch((err) => {
      res.json(err);
    });
});

// router.get("/api/workouts", (req, res) => {
//   Workout.find({})
//     .then(dbTransaction => {
//         console.log("GET",dbTransaction)
//         res.send(dbTransaction);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

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