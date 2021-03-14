const { allExercises } = require("../db");
const { Utils } = require("../utils");

module.exports = {
  getWorkoutSets(numSets) {
    let sets = [];

    for (let i = 0; i < numSets; i++) {
      let thisSet = [];

      for (let j = 0; j < 2; j++) {
        // for now default num sets is 2
        // TODO this doesn't check for duplicates
        const thisExercise = Utils.getRandomArrayValue(allExercises);
        thisSet.push(thisExercise);
      }

      sets.push({
        id: i,
        exercises: thisSet,
      });
    }

    return sets;
  },
};
