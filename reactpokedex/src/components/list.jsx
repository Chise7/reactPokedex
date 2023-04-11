import React from 'react'
import "./list.css";
// import { db } from '../firebase'
// import {update, onValue, ref} from 'firebase/database'
// const pokemonTeam = [];


const PokeList = (props) => {
  return(
      <div className = 'pokemon-card'>
          <img src={props.sprites.front_default} alt = {props.pokemon.name}/>
          <h2>{props.pokemon.name}</h2>
          <div>
              <button onClick = {() => props.addTeam(props.pokemon)}>Add {props.pokemon.name} To Team</button>
          </div>
      </div>
  );
};

export default PokeList;
