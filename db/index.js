module.exports = {
  allExercises: [
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
  ].map((exercise, i) => {
    return {
      id: i,
      name: exercise,
    };
  }),
};
