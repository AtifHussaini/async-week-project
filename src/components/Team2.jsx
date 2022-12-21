import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { selectRandomPlayers2, fetchRandomPlayers2Async } from "./team2Slice";

const Team2 = () => {

    const dispatch = useDispatch();
    const players = useSelector(selectRandomPlayers2)

    const handleClick = async () => {
        dispatch(fetchRandomPlayers2Async())
    }

    return (
        <div>
            <h1>Team 2</h1>
            {players.map(player => {
                return (
                    <h4 key={player.id}>{player.firstName} {player.lastName} has a ranking of {player.ranking}</h4>
                )})}
            <h2>Overall ranking: </h2>
            <h2 id="team2Score">{players.reduce((acc, cur) => {
                return (parseInt(acc) + parseInt(cur.ranking))
            },0)}</h2>
            <button onClick={handleClick}>Add Team</button>
        </div>
    );
}

export default Team2;