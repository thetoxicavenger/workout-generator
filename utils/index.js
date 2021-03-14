module.exports = {
  Utils: class {
    static getRandomArrayValue = (arr) =>
      arr[Math.floor(Math.random() * arr.length)];

    // static getRandomExercises = (exercises, { numExercises = 6 }) => {
    //   let workout = [];

    //   let i = 0;
    //   let availableExercises = [...exercises];

    //   while (i < numExercises) {
    //     workout = [
    //       ...workout,
    //       availableExercises.splice(
    //         Utils.randomArrIndex(availableExercises),
    //         1
    //       )[0],
    //     ];
    //     i++;
    //   }

    //   return workout;
    // };
  },
};
