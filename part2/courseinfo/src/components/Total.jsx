const Total = ({ parts }) => {
  const exerciseCounts = parts.map((part) => part.exercises);
  const totalExercises = exerciseCounts.reduce(
    (accumulator, current) => accumulator + current
  );
  return <strong>total of {totalExercises} exercises</strong>;
};

export default Total;
