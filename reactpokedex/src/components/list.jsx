import React from 'react'
import "./list.css";

const PokeList = (props) => {
    return(
        <div className = 'pokemon-card'>
            <img src={props.sprites.front_default} alt = {props.pokemon.name}/>
            <h2>{props.pokemon.name}</h2>
            <div>
                <button onClick = {props.onClick}>Add {props.pokemon.name} To Team</button>
            </div>
        </div>
    );
};

export default PokeList;

// const addTeam = () => {
//     alert("Added!")
// }

// const PokeList = ({ pokemon , sprites}, props) => {