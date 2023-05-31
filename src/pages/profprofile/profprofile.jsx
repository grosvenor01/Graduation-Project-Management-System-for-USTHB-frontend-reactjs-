import './profprofile.css'
import RightBar from '../../components/rightbar'
import Prfl from '../../components/prfl'
import PfeCard from '../../components/pfecard'
import AddPfe from "../../components/addpfe"
import { useState } from 'react'
import React from 'react';
import RespoCards from '../../components/respocards'
import CommiCards from '../../components/commicards'
import JuryCards from '../../components/jurrycards'
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { useParams } from 'react-router-dom';

function ProfProfile() {
    const history=useNavigate()
    const [popup,setPopup] = useState(false)
    const [show,setShow] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [formDataArray, setFormDataArray] = useState([]);
    const [data, setData] = useState([]);
    //let ID=document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1]
    let ID = useParams().id
    const [details, setDetails]= useState({
        name: "",
        detail: "",
        cmpt1: "",
        cmpt2: "",
        cmpt3: "",
    })
    const [detailsList, setDetailsList] = useState([
      {
        id: 1,
        name: 'Projet 1',
        detail: 'Détails du projet 1',
        cmpt1: 'Compétence 1',
        cmpt2: 'Compétence 2',
        cmpt3: 'Compétence 3'
      },
      {
        id: 2,
        name: 'Projet 2',
        detail: 'Détails du projet 2',
        cmpt1: 'Compétence 4',
        cmpt2: 'Compétence 5',
        cmpt3: 'Compétence 6'
      }
    ]);
      useEffect(() => {
        fetch(`http://localhost:8000/api/ensignant_posts/${ID}`, {
            credentials: 'include'
          })
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

      const handleUpdateDetails = (updatedDetails) => {
      const updatedList = detailsList.map(details => {
        if (details.id === updatedDetails.id) {
         return updatedDetails; 
        } else {
         return details;
        }
     });
     setDetailsList(updatedList);  
     setPopup(false);  // Add this to close the popup
     }


    const handleChange = (e) =>{
        const {name, value }=e.target
        setDetails ((prev)=>{
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
        setFormDataArray([...formDataArray, details]);
        console.log(details);
    }

    const handleAddPfe = (formData) => {
        setFormDataArray([...formDataArray, formData]);
        setPopup(false);
      };
    const [selectedOption, setSelectedOption] = useState('default');
      const handleOptionChange = (option) => {
        setSelectedOption(option);
      }


      const [theme, setcommission] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:8000/api/get_themes_to_validate/${ID}`, {
            credentials: 'include'
          })
            .then(response => response.json())
            .then(theme => setcommission(theme));
    }, []);

      const [jury, setjury] = useState([]);
      useEffect(() => {
        fetch(`http://localhost:8000/api/ajouter_jury/${ID}`, {
            credentials: 'include'
          })
            .then(response => response.json())
            .then(jury => setjury(jury));
    }, []);
    console.log(jury)
    const handleSubmit1 = async (e ,status,value,spc,niv) => {
      e.preventDefault();
      const response = await fetch(`http://localhost:8000/api/accpete_refuse_themes/${value}`,{
          method: "POST",
          credentials:'include',
          headers: {
              'Content-Type' : 'application/json'
          },
          body: JSON.stringify({status:status,specialite:spc,niveau:niv})
      })}
  return (
        <div className="profprofile">
          <RightBar />
          <div className="profright">
            <div className="prflprf">
              <Prfl
                selectedOption={selectedOption}
                onOptionChange={handleOptionChange}
              />
            </div>
            {selectedOption === 'Responsable' ? (
              <RespoCards />
            ) : selectedOption === 'Commission' ? (
              theme.length > 0 ? (
                theme.map((com, index) => (
                  <div className="respocard">
                    <h1>Titre de theme</h1>
                    <h2>Etudiant: <small>{theme[index].etudiant}</small></h2>
                    <h2>Binome: <small>{theme[index].binome}</small></h2>
                    <h2>Encadrent: <small>{theme[index].encadrent}</small></h2>
                    <h4>click <a href={`http://localhost:8000${theme[index].file}`}>fiche pfe</a></h4>
                    <div className="comibtn">
                      <button onClick={(e) => handleSubmit1(e, "Accepted", theme[index].id, theme[index].specialite, theme[index].niveau)} className="cbtn1">Accepter</button>
                      <button onClick={(e) => handleSubmit1(e, "Refused", theme[index].id, theme[index].specialite, theme[index].niveau)} className="cbtn2">refuser</button>
                    </div>
                  </div>
                ))
              ) : null
            ) : selectedOption === 'Jury' ? (
              jury.map((jur, index) => (
                <div className="respocard" id="commicard">
                  <h4>click <a href={`http://localhost:8000${jury[index].themes.file}`}>fiche pfe</a></h4>
                  <button className="cbtn1" onClick={()=> history(`/evaluation/${jur.id}`)}>Evaluation</button>
                </div>
              ))
            ) : (
              <>
                {
                  ID === document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1] &&
                  <button onClick={() => setPopup(true)}>Ajouter un PFE</button>
                }
                <div className="pfecards">
                  {data.map((info, index) => (
                    <div className="pfecard">
                      <>
                        <h1>{data[index].main_text}</h1>
                        <h3>Détails:</h3>
                        <h4>{data[index].description_text}</h4>
                        <h3>Competance requits</h3>
                        <div className="cmpts">
                          {data[index].keywords.split(',').map((keyword, indexx) => (
                            <div className="cmpt">#{keyword}</div>
                          ))}
                        </div>
                        {
                        ID === document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1] &&
                        <button>Modifier</button>
                        }
                      </>
                    </div>
                  ))}
                </div>
              </>
            )}
            <AddPfe
              trigger={popup}
              setTrigger={setPopup}
              details={details}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              show={show}
              setShow={setShow}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
              onAddPfe={handleAddPfe}
            />
          </div>
        </div>
      );
}

export default ProfProfile 