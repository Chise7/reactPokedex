import React from 'react'
import "../style/nextPrev.css";

export default function NextPrev({next, prev, start, stop}){
    return(
        <div className='next-prev-container'>
            {next && <button className='next-button' onClick = {next}>Next</button>}
            {prev && <button className='prev-button' onClick = {prev}>Previous</button>}
        </div>
    )
}