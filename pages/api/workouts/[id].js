class Utils {
  static randomArrIndex = (arr) => Math.floor(Math.random() * arr.length);

  static getRandomExercises = (exercises, { numExercises = 6 }) => {
    let workout = [];

    let i = 0;
    let availableExercises = [...exercises];

    while (i < numExercises) {
      workout = [
        ...workout,
        availableExercises.splice(
          Utils.randomArrIndex(availableExercises),
          1
        )[0],
      ];
      i++;
    }

    return workout;
  };
}

const workoutTypes = ["push", "pull", "legs", "core", "cardio", "stretching"];

const exercises = [
  "bent over row - shoulder width grip",
  "bent over row - bar grip against wall",
  "incline chest press against wall - narrow grip",
  "incline chest press against wall - alternating-handed",
  "side planks",
  "shrugs",
  "bicep curls w/ olympic bar",
  "bench",
  "incline bench",
  "decline bench",
  "squats",
  "front hold squats",
  "deadlifts",
  "cleans",
  "clean & jerk",
  "front dumbbell raise",
  "side dumbbell raise",
  "standing military press w/ olympic bar",
];

export default (req, res) => {
  if (req.query.id === "random") {
    const totalExercisesCount = exercises.length;

    const numSetsRequested = Math.abs(req.query.numSets);
    const numExercisesPerSetRequested = Math.abs(req.query.numExercisesPerSet);

    console.log(numSetsRequested, numExercisesPerSetRequested);

    if (!numSetsRequested || !numExercisesPerSetRequested) {
      // allows for NaN, 0
      res.status(422).send("Invalid num exercises");
    } else {
      res.json(
        Utils.getRandomExercises(exercises, {
          numExercises:
            numExercisesPerSetRequested > totalExercisesCount
              ? totalExercisesCount
              : numExercisesPerSetRequested,
        })
      );
    }
  } else {
    res.status(500).send("something went wrong");
  }
};
