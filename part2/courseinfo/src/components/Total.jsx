const Total = ({ parts }) => {
  const exerciseCounts = parts.map((part) => part.exercises);
  const total = exerciseCounts.reduce(
    (accumulator, current) => accumulator + current
  );
  return <strong>total of {total} exercises</strong>;
};

export default Total;
