import React, { useState, useEffect } from 'react';
import pokeList from './components/list'

function App(){
  const [pokemon, setPokemon] = useState([])
  const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setnextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  

  useEffect(()=> {
    const pokeURL = "https://pokeapi.co/api/v2/pokemon"
    // getPokemon(pokeURL)

    const getPokemon = async() => {
    const res = await fetch(pokeURL);
    const data = await res.json();
    const pokeData = await Promise.all(data.results.map(async (result) =>{
      const pokeRes = await fetch(results.url);
      return pokeRes.json();
    }));
    setPokemon(pokeData);
    // const { pokemon } = data;
    }

    // const getPokemonImg = async() => {
    //   const res = await fetch("https://pokeapi.co/api/v2/pokemon/${pokemon.name}");
    //   const data = await res.json();
    //   const { sprite } = data;
    //   }

  },[]);


  function addTeam(){
    //uhhhhh
  }

  function next(){
    setCurrPage(nextPage)
  }

  function prev(){
    setPrevPage(prevPage)
  }

  return (
    <>
      <div>
        {pokemon.map((pokemon) => (
          <pokeList key = {pokemon.id} name = {pokemon.name} imageURL = {pokemon.sprites.front_default}/>
        ))}
      </div>
      <nextPrev
        next={nextPage ? next:null}
        prev = {prevPage ? prev: null}
      />
    </>
  );
}

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