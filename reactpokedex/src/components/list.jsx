import React from 'react'

export default function list({ pokemon }){
    return(
        <div>{pokemon.map(p => (
            <div key = {p}>{p}</div>
        ))}
        </div>
    )
}