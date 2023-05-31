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
  let ID  = useParams().id
  console.log(ID)
  const [profil,setprofile] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:8000/api/ensignant_profile/${ID}`, {
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
                 <h2>{profil.grade}</h2>
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
                  <h2>{profil.interesse}</h2>
                </div>
            </div>
        
            <div className="progress">
              <Progress percent={persent + '%'} />
              {
              ID === document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1] && 
              <div className="prgbtn">
              <button onClick={increase}>+</button> 
              <button onClick={decrease}> - </button>             
              </div>
              }
              {
              ID === document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1] &&
              <select name="type" value={props.selectedOption} onChange={handleOptionChange} id='select'>
                <option value="Enseignant">Enseignant</option>
                <option value="Jury">Jury</option>
                <option value="Commission">Commission</option>
                <option value="Responsable">Responsable</option>
              </select>
              }
            </div>
        </div>
        )}
        </div>
    )
}
export default Prfl