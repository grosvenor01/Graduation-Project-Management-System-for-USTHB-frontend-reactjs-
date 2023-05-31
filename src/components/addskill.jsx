import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import React from 'react';
function AddSkill ({open, onClose, onFormSubmit}){
    /*const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
          ...prevFormData,
          [name]: value,
        }));
      };*/
    const [openModal, setOpenModal] = useState(false);
    const handleChange = (e) =>{
        const {name, value }=e.target
        setInfos ((prev)=>{
            return {...prev, [name]: value}
        })
    }
    /*const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        onFormSubmit(formData);
    }*/
    const [infos, setInfos]= useState({
        skill_name: "",
        description: "",
        pourcentage:null,
        user:document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1]
    })
    const handleSubmit = async(e) => {
        e.preventDefault()
        const response = await fetch("http://localhost:8000/api/skills/",{
            method: "POST",
            headers: {
                'Content-Type' : 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(infos)
        })
        const result = await response.json();
        onClose();
    }
    if(!open) return null
    return ( 
        <div className="popup">
            <form className="addpfe" onSubmit={handleSubmit}>
                <FontAwesomeIcon icon={faXmark} className='xmark' onClick={onClose} /> <br />
                <h1>Compétence :</h1>
                <input type="text" placeholder="entrez une compétence..." name='skill_name' onChange={handleChange} />
                <h1>informations :</h1>
                <textarea id="textarea" type="text" placeholder="entrez des informations sur ces compétence..." name='description' onChange={handleChange}/>
                <button type="submit">Ajouter</button>
            </form>
        </div>
    )
}

export default AddSkill