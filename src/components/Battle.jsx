import React, { useState } from "react";

const Battle = ({ score1, score2 }) => {
  const [result, setResult] = useState("");

  const handleClick = () => {
    if (score1 > score2) {
      setResult("Team 1 is the winner!");
    } else if (score1 < score2) {
      setResult("Team 2 is the winner!");
    } else {
      setResult("Teams are tied!");
    }
  };

  return (
    <div id="battle">
      <button onClick={handleClick}>Battle</button>
      <h1>{result}</h1>
    </div>
  );
};

export default Battle;
