import React from 'react'
import "../style/team.css";
const PokeTeam = (props) => {
    return(
        <>
        <div className = "team-member">
            <img src={props.sprites.front_default} alt = {props.pokemon.name}/>
            <h2>#{props.pokemon.id} {props.pokemon.name}</h2>
        </div>
        </>
    );
};

export default PokeTeam