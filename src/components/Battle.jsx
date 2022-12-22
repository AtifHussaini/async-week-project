import React, { useState } from "react";
import { selectScore1, selectScore2 } from "../components/scoreSlice";
import { useSelector } from "react-redux";

const Battle = () => {
  const score1 = useSelector(selectScore1);
  const score2 = useSelector(selectScore2);

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
      <button id="button" onClick={handleClick}>Tip-Off</button>
      <h1>{result}</h1>
    </div>
  );
};

export default Battle;
