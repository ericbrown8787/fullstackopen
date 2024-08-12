import { useState } from "react";

const Heading = (props) => <h2>{props.text}</h2>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const StatisticLine = (props) => (
  <p>
    {props.text} {props.value}
  </p>
);

const Statistics = (props) => {
  if (!props.good && !props.neutral && !props.bad) {
    return <div>No feedback given</div>;
  }
  return (
    <>
      <StatisticLine text="good" value={props.good} />
      <StatisticLine text="neutral" value={props.neutral} />
      <StatisticLine text="bad" value={props.bad} />
      <StatisticLine text="all" value={props.all} />
      <StatisticLine text="average" value={props.average} />
      <StatisticLine text="positive" value={`${props.positive} %`} />
    </>
  );
};
const App = () => {
  // Application State
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [all, setAll] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);

  // Helper Functions
  const calculateAverage = (good, neutral, bad) => {
    return (good - bad) / (good + neutral + bad);
  };

  const calculatePositive = (good, neutral, bad) => {
    return (good / (good + bad + neutral)) * 100;
  };

  // Event Handlers
  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    setAll(updatedGood + neutral + bad);
    setAverage(calculateAverage(updatedGood, neutral, bad));
    setPositive(calculatePositive(updatedGood, neutral, bad));
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
    setAll(good + updatedNeutral + bad);
    setAverage(calculateAverage(good, updatedNeutral, bad));
    setPositive(calculatePositive(good, updatedNeutral, bad));
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
    setAll(good + neutral + updatedBad);
    setAverage(calculateAverage(good, neutral, updatedBad));
    setPositive(calculatePositive(good, neutral, updatedBad));
  };

  return (
    <div>
      <Heading text="give feedback" />
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Heading text="statistics" />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        all={all}
        average={average}
        positive={positive}
      />
    </div>
  );
};

export default App;
