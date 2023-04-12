import React, { useState, useEffect } from 'react';
import PokeList from './components/list';
import NextPrev from './components/nextPrev';
import PokeTeam from './components/team';
import { db } from './firebase'
import {ref, update} from 'firebase/database'

function App(){
  const [pokemonList, setPokemon] = useState([]);
  const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setnextPage] = useState("")
  const [prevPage, setPrevPage] = useState("")
  const [pokemonTeam, setTeam] = useState([]);
  
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

  const addTeam = async (pokemon) =>{
    if (pokemonTeam.length < 6){
      const dataRef = ref(db,'/added');
      setTeam([...pokemonTeam, pokemon]);
      const updatedTeam = {...pokemonTeam};
      update(dataRef,updatedTeam);
      alert("Added!")
    }
    else{
      alert("You already have 6 pokemon!")
    }
  }

  const next = () => {
    setCurrPage(nextPage);
  }

  const prev = () => {
    setCurrPage(prevPage);
  }

  return (
    <>
      <div className = 'web-container'>
        <div className='pokemon-card-container'>
          {pokemonList.map((pokemon) => (
            <PokeList key = {pokemon.id} 
            pokemon = {pokemon} 
            sprites = {pokemon.sprites} 
            addTeam = {addTeam}/>
          ))}
        </div>
        <div className = 'team-container'>
          <>
            <div>Team:</div>
            {pokemonTeam.map((team)=> (
              <PokeTeam key = {team.id} 
              pokemon = {team} 
              sprites = {team.sprites}/>
            ))}
          </>
        </div>
      </div>
      <div>
        <NextPrev
          prev = {prevPage ? prev : null}
          next = {nextPage ? next : null} 
        />
      </div>
    </>
  );
};

export default App;