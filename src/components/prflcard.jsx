import { useState } from "react"
import Circularprogress from "./circularprogress"
import React from 'react';
function PrflCard({formData}) {

    const [persentage,setPersentage]= useState(10)

    return <div className="prflcard">
        <h1>{formData.competence}</h1>
        <div className="circular">
            <Circularprogress persentage={persentage} circleWidth="200"/>
            <input 
            className="circular-input"
            type="range"
            min='1' 
            max='100'
            step='1' 
            value={persentage} 
            onChange={(ev)=> setPersentage(ev.target.value)}
        />
        </div>
        <h3>info</h3>
        <h4> {formData.information} </h4>
    </div>
}

export default PrflCard