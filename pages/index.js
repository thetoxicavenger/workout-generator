import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [workout, setWorkout] = useState(null);
  const [numSets, setNumSets] = useState(2);
  const [numExercisesPerSet, setNumExercisesPerSet] = useState(3);
  const [error, setError] = useState(undefined);
  // **** TODO ***
  // convert to not random workout, which means a refactor
  // [id] should be used for predetermined workouts, ala "back & bis", "chest & shoulders", etc.
  const _getRandomWorkout = () => {
    return fetch(
      `/api/workouts/random?numSets=${numSets}&numExercisesPerSet=${numExercisesPerSet}`
    )
      .then((res) => res.json())
      .then((workout) => {
        setWorkout(workout);
      })
      .catch((err) => setError(err));
  };

  return (
    <>
      <Head>
        <title>Workout Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Workout Generator</h1>
      {/* TODO convert to selects; both need to be whole nums */}
      <div>
        <div>
          <label>Number of Sets?</label>
        </div>
        <div>
          <input
            type="number"
            min="1"
            value={numSets}
            onChange={(e) => setNumSets(e.target.value)}
          />
        </div>
      </div>
      <div>
        <div>
          <label>Number of Exercises Per Set?</label>
        </div>
        <input
          type="number"
          min="1"
          value={numExercisesPerSet}
          onChange={(e) => setNumExercisesPerSet(e.target.value)}
        />
      </div>
      <div>
        <button onClick={_getRandomWorkout}>Generate Workout</button>
      </div>
      <section>
        {!!error && <p>Could not generate workout</p>}
        {!!workout && (
          <>
            <h2>Your Workout:</h2>
            <ul>
              {workout.map((exercise) => {
                return <li key={exercise}>{exercise}</li>;
              })}
            </ul>
          </>
        )}
      </section>
    </>
  );
}
