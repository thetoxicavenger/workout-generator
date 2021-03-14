import Head from "next/head";
import { useEffect, useState } from "react";

export default function Home() {
  const [workout, setWorkout] = useState(null);
  // const [allExercises, setAllExercises] = useState(null);
  const [numSets, setNumSets] = useState(2);
  const [error, setError] = useState(undefined);

  // **** TODO ***
  // convert to not random workout, which means a refactor
  // [id] should be used for predetermined workouts, ala "back & bis", "chest & shoulders", etc.

  // const _getAllExercises = () => {
  //   return fetch("/api/exercises")
  //     .then((res) => res.json())
  //     .then((exercises) => {
  //       setAllExercises(exercises);
  //     })
  //     .catch((err) => setError(err));
  // };

  // useEffect(() => {
  //   _getAllExercises();
  // }, []);

  const _getWorkout = () => {
    return fetch(`/api/workout?numSets=${numSets}`)
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
      <div>
        <div>
          <label>How many sets?</label>
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
        <button onClick={_getWorkout}>Generate Workout</button>
      </div>
      <section>
        {!!error && <p>Could not generate workout</p>}
        {!!workout && (
          <>
            <h2>Your Workout:</h2>
            <>
              {workout.sets.map((set) => {
                return (
                  <ul key={set.id}>
                    <h2>Set {set.id + 1}</h2>
                    {set.exercises.map((exercise) => {
                      return <li key={exercise.id}>{exercise.name}</li>;
                    })}
                  </ul>
                );
              })}
            </>
          </>
        )}
      </section>
    </>
  );
}
