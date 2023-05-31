import man from '../assets/images/man.png';
import github from '../assets/images/github.png'
import Resume from '../assets/images/Resume.png'
import LinkedIn from '../assets/images/LinkedIn.png'
import { useState, useEffect} from 'react';
import { faChampagneGlasses } from '@fortawesome/free-solid-svg-icons';
import Progress from './progress';
import React from 'react';
import { useParams } from 'react-router-dom';

function Prfl (props){
  const [profil,setprofile] = useState(null);
  let ID=useParams().id
  useEffect(() => {
    console.log("dady",ID)
    fetch(`http://localhost:8000/api/student_profile/${ID}`, {
        credentials: 'include'
      })
        .then(response => response.json())
        .then(data => setprofile(data));
}, []);
console.log(profil)
  const [persent,setPersent] = useState(10);

  const increase = () => {
    if (persent + 10 >100) return;
    setPersent(persent + 10);
  };

  const decrease = () => {
    if (persent - 10 < 0) return;
    setPersent(persent - 10);
  };
  const handleOptionChange = (e) => {
    props.onOptionChange(e.target.value);
  }
    return (
        <div>
        {profil && (
        <div className="profilestd">
            
            <div className="prflpic">
               <img src={man} alt="" />
               <div className="prfltexts">
                 <h1>{profil.user.username}</h1>
                 <h2>{profil.study_level}</h2>
               </div>
               {profil.github_link && profil.linkedin_link && (
               <ul>
                 <li href={profil.CV}><img src={Resume} alt="" /></li>
                 <li href={profil.github_link}><img src={github} alt="" /></li>
                 <li href={profil.linkedin_link}><img src={LinkedIn} alt="" /></li>
               </ul>
               )}
            </div>
            <div className="profiletexts">
                <div className="propos">
                  <h1>a propos</h1>
                  <h2>{profil.a_propos}</h2>
                </div>

                <div className="specialite">
                  <h1>Specilaté</h1>
                  <h2>{profil.speciality}</h2>
                  <h1>Université</h1>
                  <h2>{profil.university}</h2>
                </div>

                <div className="interesse">
                  <h1>interessé sur</h1>
                  <h2>{profil.interested}</h2>
                </div>
            </div>
        
            <div className="progress">
              <Progress percent={persent + '%'} />
              <div className="prgbtn">
              <button onClick={increase}>+</button> <button onClick={decrease}> - </button>
              </div>
            </div>
        </div>
        )}
        </div>
    )
}
export default Prfl