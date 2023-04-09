import React from 'react'
import "./nextPrev";

export default function NextPrev({next, prev}){
    return(
        <div className='next-prev-container'>
            {next && <button className='next-prev-button' onClick = {next}>Next</button>}
            {prev && <button className='next-prev-button' onClick = {prev}>Previous</button>}
        </div>
    )
}