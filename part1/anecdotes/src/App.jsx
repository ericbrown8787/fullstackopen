import { useState } from "react";

const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Heading = (props) => <h2>{props.text}</h2>;

const App = () => {
  // Static Data
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  // State
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(anecdotes.map(() => 0));
  const [mostPopularAnecdote, setMostPopularAnecdote] = useState(0);

  // Helper Functions
  const randomIndex = (array) => Math.floor(Math.random() * array.length);

  // Click handlers
  const handleNextAnecdoteClick = () => {
    setSelected(randomIndex(anecdotes));
  };

  const handleVoteClick = () => {
    const copy = [...points];
    copy[selected] += 1;
    const newHighestPoints = Math.max(...copy);
    const newMostPopularAnecdote = copy.indexOf(newHighestPoints);
    setPoints(copy);
    setMostPopularAnecdote(newMostPopularAnecdote);
  };

  return (
    <>
      <Heading text="Anecdote of the day" />
      <div>{anecdotes[selected]}</div>
      <div>has {points[selected]} votes</div>
      <Button handleClick={handleVoteClick} text={"vote"} />
      <Button handleClick={handleNextAnecdoteClick} text={"next anecdote"} />
      <Heading text="Anecdote with the most votes" />
      <div>{anecdotes[mostPopularAnecdote]}</div>
      <div>has {points[mostPopularAnecdote]} votes</div>
    </>
  );
};

export default App;
