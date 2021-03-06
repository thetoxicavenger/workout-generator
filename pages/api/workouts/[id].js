class Utils {
  static randomArrIndex = (arr) => Math.floor(Math.random() * arr.length);

  static getRandomExercises = (exercises, { numExercises = 6 }) => {
    let workout = [];

    let i = 0;
    let availableExercises = [...exercises];

    while (i < numExercises) {
      workout = [
        ...workout,
        availableExercises.splice(Utils.randomArrIndex(availableExercises), 1),
      ];
      i++;
    }

    return workout;
  };
}

const exercises = [
  "bent over row - shoulder width grip",
  "bent over row - bar grip against wall",
  "incline chest press against wall - narrow grip",
  "incline chest press against wall - alternating-handed",
  "side planks",
  "shrugs",
  "bicep curls w/ olympic bar",
  "incline bench",
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
    const numExercisesRequested = Math.abs(req.query.numExercises);

    if (numExercisesRequested === 0 || numExercisesRequested === NaN) {
      // i think i would throw to a generic error handler (middleware?) here
      // TODO this is also still returning 200 somehow
      return res.status(422);
    }

    console.log(totalExercisesCount, numExercisesRequested); // TODO got a bug when you add 19 or more (total current available)

    res.json(
      Utils.getRandomExercises(exercises, {
        numExercises:
          numExercisesRequested > totalExercisesCount
            ? totalExercisesCount
            : numExercisesRequested,
      })
    );
  } else {
    res.status(500);
  }
};
