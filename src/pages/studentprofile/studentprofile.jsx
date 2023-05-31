import './studentprofile.css'
import RightBar from '../../components/rightbar'
import Prfl from '../../components/prfl'
import PrflCard from '../../components/prflcard'
import Prfletd from '../../components/prfletd'
import React from 'react';
import Circularprogress from "../../components/circularprogress"
import { useState } from 'react';
import { useEffect } from 'react';
import AddSkill from '../../components/addskill';
import { useParams } from 'react-router-dom'
function StudentProfile() {

    const [openModal, setOpenModal] = useState(false)
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({ competence: '', information: '' });
    const [formSubmissions, setFormSubmissions] = useState([]);
    const [persentage,setPersentage]= useState(10)
    const handleFormSubmit = (data) => {
        setFormData(data);
        setFormSubmitted(true);
        setFormSubmissions((prevSubmissions) => [...prevSubmissions, data]);
    };
        const [data, setData] = useState([]);
        let ID=useParams().id
        useEffect(() => {
          fetch(`http://localhost:8000/api/skills/${ID}`, {
              credentials: 'include'
            })
              .then(response => response.json())
              .then(data => setData(data));
      }, []);
    return(
        <div className="studentprofile">
            <RightBar/>
            <div className="studentright">
                <div className="prflstd">
                    <Prfletd/>
                    {
                    ID === document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1] &&
                    <button onClick={()=>setOpenModal(true)}>Ajouter une compétence</button>
                    } 
                    <AddSkill open={openModal} onClose={()=>setOpenModal(false)} onFormSubmit={handleFormSubmit} />
                    <div className="prflcontainer">
                    {data.map((info, index) => (
                    <div className="prflcard">
                        <h1>{data[index].skill_name}</h1>
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
                        <h4>{data[index].description}</h4>
                    </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudentProfile 