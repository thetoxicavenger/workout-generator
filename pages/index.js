import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [workout, setWorkout] = useState(null);
  const [error, setError] = useState(undefined);

  const _getRandomWorkout = () => {
    return fetch("/api/workouts/random?numExercises=asd")
      .then((res) => res.json())
      .then((workout) => setWorkout(workout))
      .catch((err) => setError(err));
  };

  return (
    <>
      <Head>
        <title>Workout Generator</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Workout Generator</h1>
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
