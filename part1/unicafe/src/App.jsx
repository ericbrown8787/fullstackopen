import { useState } from "react";

const Heading = (props) => <h2>{props.text}</h2>;

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Stat = (props) => (
  <p>
    {props.statName} {props.statValue}
  </p>
);
const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
  };

  const handleNeutralClick = () => {
    const updatedNeutral = neutral + 1;
    setNeutral(updatedNeutral);
  };

  const handleBadClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad);
  };
  return (
    <div>
      <Heading text="give feedback" />
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Heading text="statistics" />
      <Stat statName="good" statValue={good} />
      <Stat statName="neutral" statValue={neutral} />
      <Stat statName="bad" statValue={bad} />
    </div>
  );
};

export default App;
