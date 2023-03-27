import React, { useState, useEffect } from 'react';
import list from './components/list'
function App() {
  const [pokemon, setPokemon] = useState([])
  const [currPage, setCurrPage] = useState("https://pokeapi.co/api/v2/pokemon")
  const [nextPage, setnextPage] = useState()
  const [prevPage, setPrevPage] = useState()
  const [loading, setLoad] = useState(true)

  useEffect(()=>{
    setLoading(true)
    let cancel
    axios.get(currPage,{cancelToken: new axios.cancelToken(c => cancel = c)}).then(res=>{ 
      setLoad(flase)
      setnextPage(res.data.next)
      setPrevPage(res.data.previous)
      setPokemon(res.data.results.map(p=>p.name)) })
      return () => cancel()
  }, [currPage])

  function next(){
    setCurrPage(nextPage)
  }

  function prev(){
    setPrevPage(prevPage)
  }

  if(loading) return "Loading..."
  
  return (
    <>
      <list pokemon={pokemon}/>
      <nextPrev
        next={nextPage ? next:null}
        prev = {prevPage ? prev: null}
      />
    </>
  );
}

export default App;
