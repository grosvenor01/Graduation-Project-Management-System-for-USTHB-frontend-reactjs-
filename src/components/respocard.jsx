import React from 'react';
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function RespoCard (){
    return (
        <div className="respocard">
            <h1>Titre de theme</h1>
            <h2>Etudiant : <small>Saidi abdelkader</small></h2> 
            <h2>Binome : <small>Tareb Selma</small></h2> 
            <h2>Encadrent : <small>Ferihi</small> </h2> 
            <h4>click <small>fiche pfe</small></h4>
                <div className="prf">
                    <p id='he' >name_prof</p>
                    <FontAwesomeIcon icon={faCheck} className='yes'/>
                </div>
                <div  className="prf">
                    <p id='he' >name_prof</p>
                    <FontAwesomeIcon icon={faCheck} className='yes'/>
                </div>
                <div className="prf">
                    <p id='he' >name_prof</p>
                    <FontAwesomeIcon icon={faCheck} className='yes'/>
                </div>
        </div>
    )
}

export default RespoCard