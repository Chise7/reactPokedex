import React from 'react'
import "./list.css";

const PokeList = ({ pokemon , sprites }) => {
    return(
        <div className = 'pokemon-card'>
            <img src={sprites.front_default} alt = {pokemon.name}/>
            <h2>{pokemon.name}</h2>
            <div>
                <button onClick = {addTeam}>Add {pokemon.name} To Team</button>
            </div>
        </div>
    );
};

export default PokeList;

const addTeam = () => {
    console.log("IM WORKING");
}