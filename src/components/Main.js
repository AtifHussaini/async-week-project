import React, { useEffect } from 'react';
import axios from "axios";
import Team1 from "./Team1";
import Team2 from "./Team2";
import { useDispatch, useSelector } from "react-redux";

import { selectAllPlayers,fetchAllPlayersAsync } from "./playersSlice";

const Main = () => {

    const dispatch = useDispatch();
    const players = useSelector(selectAllPlayers)

    useEffect (() => {

       dispatch(fetchAllPlayersAsync())
       

    }, []);
    console.log(players)
    
    return (
        <div>
            <Team1 />
            <Team2 />
            {players.map(player => {
               return <h1>{player.firstName}</h1>})}
        </div>
    );
}

export default Main;