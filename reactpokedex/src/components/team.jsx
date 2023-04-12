import React from 'react'
import "../style/team.css";
const PokeTeam = (props) => {
    return(
        <>
        <div>
            #{props.pokemon.id}
        </div>
        <div className = "team-member">
            <img src={props.sprites.front_default} alt = {props.pokemon.name}/>
            <h2>{props.pokemon.name}</h2>
        </div>
        </>
    );
};

export default PokeTeam