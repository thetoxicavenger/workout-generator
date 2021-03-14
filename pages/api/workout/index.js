import { getWorkoutSets } from "../../../controllers";

export default (req, res) => {
  const numSets = Math.abs(req.query.numSets);

  if (!numSets) {
    // todo generic error middleware to pass to?
    res.status(422).send("Invalid num sets parameter");
  } else {
    try {
      const sets = getWorkoutSets(numSets);
      res.json({ sets });
    } catch (e) {
      console.error(e);
      res.status(500).send("Something went wrong");
    }
  }
};
