import React from 'react'
// import "./nextPrev"

export default function NextPrev({next, prev}){
    return(
        <div>
            {next && <button onClick = {next}>Next</button>}
            {prev && <button onClick = {prev}>Previous</button>}
        </div>
    )
}