import { useState } from 'react';
import './avancement.css';
import {useNavigate} from 'react-router-dom'
function Avancement() {
  const [infos, setInfos]= useState({  
      "num_projet" :"" ,
      "matricule":"",
      "nom1":"",
      "prenom1":"",
      "matricule2":"",
      "nom2":"",
      "prenom2":"",
      "titre":"",
      "organisme":"", 
      "promoteur1":"",
      "emargement":"",
      "promoteur2":"",
      "emargement2":"", 
      "promoteur3":"",
      "emargement3":"", 
      "etude1":"",
      "etude_bib" :"",
      "realisation":"",
      "reduction":"",
      "remarque":"",
      "membre":"",
      "emargment4":"",
      "etude2":"",
      "realisation2":"",
      "reduction2":"",
      "remarque2":""
  })
  const [formData, setFormData] = useState({});

  const handleChange = (e) =>{
    const {name, value }=e.target
    setInfos ((prev)=>{
     return {...prev, [name]: value}
 })}
  const history = useNavigate()
   const handleSubmit = async(e) => {
      e.preventDefault();
      console.log(infos);
      const response = await fetch("http://localhost:8000/api/etat_avacement/",{
        method: "POST",
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(infos)
      })
      const result = await response.json();
      console.log(result)
      history("/home")
   };
  

  return (
    <div className="avancement">
      <form onSubmit={handleSubmit} className="avnform">
        <h1 className="tt">Etat d'avancement du PFE :</h1>
        <br /> <br />
        <h3>numero du projet :</h3>
        <input type="text" name="num_projet" placeholder="ACAD_123" className="inputp" onChange={handleChange} id="ss"/>
        <h3>Etudiants :</h3>
        <div className="wrapper">
          <input type="text" name="matricule" placeholder="Matricule" className="inputp" onChange={handleChange} id="ss"/>
          <input type="text" name="nom1" placeholder="Nom" className="inputp" onChange={handleChange} id="ss"/>
          <input type="text"name="prenom1"placeholder="Prenom"className="inputp"onChange={handleChange}id="ss"/>
          <input type="text" name="matricule2" placeholder="Matricule" className="inputp" onChange={handleChange} id="ss"/>
          <input type="text" name="nom2" placeholder="Nom" className="inputp" onChange={handleChange} id="ss"/>
          <input type="text" name="prenom2" placeholder="Prenom" className="inputp" onChange={handleChange} id="ss"/>
        </div>
        <br />

        <div className="promo">
          <label htmlFor="">
            Titre de projet <br />
            <input type="text" name="titre" placeholder="Titre du Porojet" className="inputp" onChange={handleChange}/>
          </label>
          <br />
          <label htmlFor="" id="lbl">
            Organisme <br />
            <select name="organisme" id="sis" onChange={handleChange}>
              <option value="interne">interne</option>
              <option value="externe">externe</option>
            </select>
          </label>
        </div>

        <br />
        <h3>Promoteur</h3>
        <div className="promo">
          <input type="text" name="promoteur1" placeholder="Nom promoteur" className="inputp" onChange={handleChange}/>
          <input type="text" name="emargement" placeholder="Emargement" className="inputp" onChange={handleChange} id="lbl"/>
        </div>
        <br /> <br /> <br />

        <h3 className="tt">Travail Réalisé</h3>
        <div className="promo">
          <label htmlFor="">
            Etude Biliographique <br />
            <input type="text" name="etude1" placeholder="etude" className="inputp" onChange={handleChange}/>
          </label>{" "}
          <br />
          <label htmlFor="" id="lbl">
            Réalisation <br />
            <input type="text" name="realisation" placeholder="realisation" className="inputp" onChange={handleChange}/>
          </label>{" "}
          <br />
        </div>

        <div className="promo">
          <label htmlFor="">
            Rédaction <br />
            <input type="text" name="reduction" placeholder="rédaction" className="inputp" onChange={handleChange}/>
         </label>{" "}
          <br />
          <label htmlFor="" id="lbl">
            Autre Remarque <br />
            <input type="text" name="remarque" placeholder="...." className="inputp" onChange={handleChange}/>
          </label>
          <br />
        </div>
        <br />
        <h3>------------------------------------------------------Cadre réservé à la commission de suivi s’il y a lieu------------------------------------------------------  </h3>
        <h3>Membre</h3>
        <div className="promo">
          <input type="text" name="membre" placeholder="Nom promoteur" className="inputp" onChange={handleChange}/>
          <input type="text" name="emargement4" placeholder="Emargement" className="inputp" onChange={handleChange} id="lbl"/>
        </div>
        <h3 className="tt">Travail Réalisé</h3>
        <div className="promo">
          <label htmlFor="">
            Etude Biliographique <br />
            <input type="text" name="etude2" placeholder="etude" className="inputp" onChange={handleChange}/>
          </label>{" "}
          <br />
          <label htmlFor="" id="lbl">
            Réalisation <br />
            <input type="text" name="realisation2" placeholder="realisation" className="inputp" onChange={handleChange}/>
          </label>{" "}
          <br />
        </div>

        <div className="promo">
          <label htmlFor="">
            Rédaction <br />
            <input type="text" name="redaction2" placeholder="rédaction" className="inputp" onChange={handleChange}/>
         </label>{" "}
          <br />
          <label htmlFor="" id="lbl">
            Autre Remarque <br />
            <input type="text" name="remarque2" placeholder="...." className="inputp" onChange={handleChange}/>
          </label>
          <br />
        </div>
        <button type="submit">Ajouter les informations</button>
      </form>
    </div>
  );
}

export default Avancement;