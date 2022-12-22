import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectRandomPlayers1, fetchRandomPlayersAsync } from "./team1Slice";
import { selectScore1 } from "./scoreSlice";

const Team1 = () => {
  const dispatch = useDispatch();
  const players = useSelector(selectRandomPlayers1);
  const score1 = useSelector(selectScore1);

  useEffect(() => {
    const team1Score = players.reduce((acc, cur) => {
      return parseInt(acc) + parseInt(cur.ranking);
    }, 0);
    dispatch({
      type: "score/updateScore1",
      payload: team1Score,
    });
  }, [players]);

  const handleClick = async () => {
    dispatch(fetchRandomPlayersAsync());
  };

  return (
    <div id="team1">
      <h1>Team 1</h1>
      {players.map((player) => {
        return (
          <div key={player.id}>
            <img src={player.image} style={{ width: 150, height: 100 }} />
            <h4>
              {player.firstName} {player.lastName} has a ranking of{" "}
              {player.ranking}
            </h4>
          </div>
        );
      })}
      <h2>Overall ranking: </h2>
      <h2>{score1}</h2>
      <button onClick={handleClick}>Add Team</button>
    </div>
  );
};

export default Team1;
