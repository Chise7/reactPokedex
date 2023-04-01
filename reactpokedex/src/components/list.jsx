import React from 'react'
import "./list.css"

const pokeList = ({pokemon}, {sprites}) => {
    return(
        <div className = 'pokemon-list'>
            <img src={sprites.front_default} alt = {pokemon.name}/>
            <h2>{pokemon.name}</h2>
            <button onClick = {addTeam}></button>
        </div>
    )
}

export default pokeList

// export default function list({ pokemon }){
//     return(
//         <div>{pokemon.map(p => (
//             <div key = {p}>{p}</div>
//         ))}
//         </div>
//     )
// }