import React, { useState } from 'react';

function Hookswitch(){
    const [colorFon, colorFonChange ] = useState('bg-secondary text-white')
    const [fontSize, setFontSize] = useState(14)
    return(
        <div 
            className = {["d-flex flex-column my-3 align-items-center", ` ${colorFon}`]}
            style={{padding : '10px', height : '250px', fontSize : `${fontSize}px`}}
        >
            <div>
                <p className="text-center">Helloy word!</p>
            </div>
            
            <div className="d-flex align-items-center my-3 justify-content-center">
                <button type="button" className="btn btn-secondary d-block mx-3" onClick={() => colorFonChange('bg-secondary text-white')}>Dark</button>
                <button type="button" className="btn btn-light d-block mx-3" onClick={()=>colorFonChange('bg-light')}>Light</button>
            </div>
            <div className="d-flex align-items-center my-3 justify-content-center">
                <button type="button" className="btn btn-light d-block mx-3" onClick={() => setFontSize((size)=> size+2)}>+</button>
                <button type="button" className="btn btn-light d-block mx-3" onClick={()=>setFontSize((size)=> size-2)}>-</button>
            </div>

        </div>
    )
}

export default Hookswitch;



