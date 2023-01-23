import { Card } from '@mui/material';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllPlayersAsync, selectAllPlayers } from './allPlayersSlice';

const Players = () => {

    const dispatch = useDispatch()

    const players = useSelector(selectAllPlayers)

    useEffect(()=> {
        dispatch(fetchAllPlayersAsync())
    },[])

    return (
        <div style={{display:"flex",flexDirection:"row", flexFlow:"wrap", justifyContent:"center"}}>
            {players.map(player => (
                <div key={player.id}>
                    <Card variant="outlined" className="basketballCard">
                        <img src={player.image} style={{width:200, height:175, marginTop:10}}></img>
                        <h1 style={{color:"#B0B0B0"}}>{player.firstName} {player.lastName}</h1>
                        <h2 style={{color:"#181818"}}>Ranking: {player.ranking}</h2>
                    </Card>
                </div>
            ))}
        </div>
    );
}

export default Players;