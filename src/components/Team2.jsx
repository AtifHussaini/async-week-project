import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectScore2 } from './scoreSlice';

import { selectRandomPlayers2, fetchRandomPlayers2Async } from "./team2Slice";

const Team2 = () => {

    const dispatch = useDispatch();
    const players = useSelector(selectRandomPlayers2)
    const score2 = useSelector(selectScore2)

    useEffect(() => {
        const team2Score = players.reduce((acc, cur) => {
            return parseInt(acc) + parseInt(cur.ranking);
          }, 0);
          dispatch({
            type: "score/updateScore2",
            payload: team2Score,
          });
        }, [players]);

    const handleClick = async () => {
        dispatch(fetchRandomPlayers2Async())
    }

    return (
        <div id="team2">
            <h1>Team 2</h1>
            {players.map(player => {
                return (
                    <div key={player.id}>
                        <img src={player.image} style={{ width: 150, height: 100 }} />
                        <h4 key={player.id}>{player.firstName} {player.lastName} has a ranking of {player.ranking}</h4>
                    </div>
                )})}
            <h2>Overall ranking: </h2>
            <h2>{score2}</h2>
            <button onClick={handleClick}>Add Team</button>
        </div>
    );
}

export default Team2;