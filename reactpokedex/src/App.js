import React, { useState, useEffect } from 'react';
import PokeList from './components/list';
import NextPrev from './components/nextPrev';
import pokeTeam from './components/team';
import { db } from './firebase'
// import {set, update, onValue, remove, ref} from 'firebase/database'
// import database from "./firebase"

function App(){
  const [pokemonList, setPokemon] = useState([]);
  const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setnextPage] = useState("")
  const [prevPage, setPrevPage] = useState("")
  const [teamList, setTeam] = useState([]);

  useEffect(()=> {
    const getPokemon = async() => {
      const res = await fetch(currPage);
      const data = await res.json();
      setnextPage(data.next);
      setPrevPage(data.previous);
      const pokeData = await Promise.all(data.results.map(async (result) =>{
        const pokeRes = await fetch(result.url);
        return pokeRes.json();
      }));
      setPokemon(pokeData);
    };
    getPokemon();
  },[currPage]);

  const next = () => setCurrPage(nextPage);

  const prev = () => setCurrPage(prevPage);
  
// <button onClick = {addTeam}>Add {pokemon.name} To Team</button>
//   const addTeam = () => {
//     alert("Added!")
// }

const test = () => alert("fortnite");

  return (
    <>
      <div className = 'web-container'>
        <div className='pokemon-card-container'>
          {pokemonList.map((pokemon) => (
            <PokeList pokemon = {pokemon} sprites = {pokemon.sprites}/>
          ))}
        </div>
        <div className = 'team-container'>
          {pokeTeam.map((team)=> (
            <pokeTeam pokemon = {team} sprites = {team.sprites}/>
          ))}
        </div>
      </div>
      <div>
        <NextPrev
          prev = {prevPage ? prev: null}
          next={nextPage ? next:null} 
        />
      </div>
    </>
  );
};

export default App;