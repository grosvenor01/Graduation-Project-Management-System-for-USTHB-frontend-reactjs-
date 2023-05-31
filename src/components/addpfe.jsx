import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import React from 'react';
import {useNavigate} from 'react-router-dom'
function AddPfe({trigger,details,children,setTrigger,show,setShow,onAddPfe}){
    const history = useNavigate()
    const [infos, setInfos]= useState({
        user_type:"ensignant",
        main_text: "",
        description_text: "",
        type:"theme",
        keywords:"",
        user:document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1]
    })
    const handleChange = (e) =>{
        const {name, value }=e.target
        setInfos ((prev)=>{
            return {...prev, [name]: value}
        })
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:8000/api/pub/",{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(infos)
        })
        const result = await response.json();
        setTrigger(false);
    }
    return (trigger) ? (
        <div className="popup">
            <form className="addpfe" onSubmit={handleSubmit}>
            <FontAwesomeIcon icon={faXmark} className='xmark' onClick={()=> setTrigger(false)}/>
             <br />
            <label htmlFor="">
                Nom du PFE : <br />
                <input type="text" placeholder="entrez le titre du PFE" onChange={handleChange} name="main_text" />
            </label> <br />
            <label htmlFor="">
                Details du PFE : <br />
                <input type="text" placeholder="entrez le resumé du PFE" onChange={handleChange} name="description_text" />
            </label> <br />
            <label htmlFor="">
                Competences : <br />
                <div className="cmpss">
                <input type="text" placeholder="entrez les compétence requis separé par ," onChange={handleChange}  name="keywords"/>
                </div>
            </label> <br />
            <button onClick={handleSubmit}>Valider</button>
            {children}
           </form>
        </div>
    ) : "";
}

export default AddPfe