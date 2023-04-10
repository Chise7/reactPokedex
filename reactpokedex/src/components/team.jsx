import React from 'react'
import "./team.css";

const pokeTeam = ({ pokemon , sprites }) => {
    return(
        <>
        <div>
            Current Team
        </div>
        <div className = "team-member">
            <img src={sprites.front_default} alt = {pokemon.name}/>
            <h2>{pokemon.name}</h2>
        </div>
        </>
    );
};