import React, { useState, useEffect } from 'react';
import PokeList from './components/list';
import NextPrev from './components/nextPrev'

function App(){
  const [pokemonList, setPokemon] = useState([]);
  const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setnextPage] = useState("")
  const [prevPage, setPrevPage] = useState("")
  

  useEffect(()=> {
    // const pokeURL = "https://pokeapi.co/api/v2/pokemon"

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
    // const { pokemon } = data;
    };
    getPokemon();
  },[currPage]);


 

  const next = () => setCurrPage(nextPage);

  const prev = () => setCurrPage(prevPage);
  

  return (
    <>
      <div>
        {pokemonList.map((pokemon) => (
          <PokeList pokemon = {pokemon} sprites = {pokemon.sprites}/>
        ))}
      </div>
      <NextPrev
        next={nextPage ? next:null}
        prev = {prevPage ? prev: null}
      />
    </>
  );
};

export default App;

// function App() {
//   const [pokemon, setPokemon] = useState([])
  // const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
  // const [nextPage, setnextPage] = useState()
  // const [prevPage, setPrevPage] = useState()
//   const [loading, setLoad] = useState(true)

//   useEffect(()=>{
//     setLoading(true)
//     let cancel
//     axios.get(currPage,{cancelToken: new axios.cancelToken(c => cancel = c)}).then(res=>{ 
//       setLoad(flase)
//       setnextPage(res.data.next)
//       setPrevPage(res.data.previous)
//       setPokemon(res.data.results.map(p=>p.name)) })
//       return () => cancel()
//   }, [currPage])

  // function next(){
  //   setCurrPage(nextPage)
  // }

  // function prev(){
  //   setPrevPage(prevPage)
  // }

//   if(loading) return "Loading..."
  
  // return (
  //   <>
  //     <list pokemon={pokemon}/>
  //     <nextPrev
  //       next={nextPage ? next:null}
  //       prev = {prevPage ? prev: null}
  //     />
  //   </>
  // );
// }