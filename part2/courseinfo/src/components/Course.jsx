const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      ))}
      <Total parts={parts} />
    </>
  );
};
const Header = ({ text }) => {
  return <h2>{text}</h2>;
};
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};
const Total = ({ parts }) => {
  const exerciseCounts = parts.map((part) => part.exercises);
  const total = exerciseCounts.reduce(
    (accumulator, current) => accumulator + current
  );
  return <strong>total of {total} exercises</strong>;
};

const Course = ({ course }) => (
  <div>
    <Header text={course.name} />
    <Content parts={course.parts} />
  </div>
);

export default Course;
