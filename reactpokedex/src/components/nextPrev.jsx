import React from 'react'

export default function nextPrev({next, prev}){
    return(
        <div>
            {next && <button onClick = {next}>Next</button>}
            {prev && <button onClick = {prev}>Previous</button>}
        </div>
    )
}