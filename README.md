snippets fer later

```

  const _getRandomWorkout = () => {
    return fetch("/api/workouts/random?numExercises=" + numExercises)
      .then((res) => res.json())
      .then((workout) => {
        setWorkout(workout);
      })
      .catch((err) => setError(err));
  };
```