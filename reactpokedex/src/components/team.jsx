import React from 'react'
import "./team.css";
// import { db } from '../firebase'
// import {onValue, ref} from 'firebase/database'

const PokeTeam = (props) => {
    return(
        <>
        <div>
            Current Team
        </div>
        <div className = "team-member">
            <img src={props.sprites.front_default} alt = {props.pokemon.name}/>
            <h2>{props.pokemon.name}</h2>
        </div>
        </>
    );
};

export default PokeTeam