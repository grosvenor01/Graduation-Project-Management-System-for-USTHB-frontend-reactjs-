import './respoprofile.css'
import RightBar from '../../components/rightbar'
import Prfl from '../../components/prfl'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react';
function RespoProfile (){
    return (
        <div className="respoprofile">
         <RightBar/>
         <div className="resporight">
            <Prfl/>
            <h1>Themes a valider</h1>
            <div className="repocards">
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
            </div>
         </div>
        </div>
    )
}

export default RespoProfile