import { useState } from 'react';
import './evaluation.css';
import { useParams } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
function Evaluation(){
    const history = useNavigate()
    let ID=useParams().id
    const [infos, setInfos]= useState({
        "quality_red":null,
        "presentation":null,
        "respect":null,
        "etude":null,
        "contribution":null,
        "quality_travail":null,
        "resultat_exp":null,
        "discutions":null
    })
  const [formData, setFormData] = useState({});
  const handleChange = (e) =>{
    const {name, value }=e.target
    setInfos ((prev)=>{
     return {...prev, [name]: value}
 })}
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // You can use the formData variable here
  };
  const handleSubmit1 = async(e) => {
      e.preventDefault();
      const response = await fetch(`http://localhost:8000/api/evaluation/${ID}`,{
        method: "POST",
        credentials:'include',
        headers: {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(infos)
      })
      const result = await response.json();
      console.log(result)
      history("/home")
   }
    return(
        <div className="avancement">
      <form onSubmit={handleSubmit1} className="avnform">
        <h3 className="tt">Evaluation</h3> <br />
        <h3 className="tt">Qualité de la rédaction </h3>
        <div className="promo">
          <label htmlFor="">
          Qualité de la rédaction <br />
            <input type="text" name="quality_red" placeholder="note ../10" className="inputp" onChange={handleChange}
            />
          </label>{" "}
          <br />
          <label htmlFor="" id="lbl">
          Présentation du mémoire <br />
            <input type="text" name="presentation" placeholder="note ../10" className="inputp" onChange={handleChange}
            />
          </label>{" "}
          <br />
        </div>

        <div className="promo">
          <label htmlFor="">
          Respect des normes <br />
            <input type="text" name="respect" placeholder="note ../10" className="inputp" onChange={handleChange}
            />
         </label>{" "}
          <br />
          <label htmlFor="" id="lbl">
          Etude Bibliographique<br />
            <input type="text" name="etude" placeholder="note ../10" className="inputp" onChange={handleChange}
            />
          </label>
          <br />
        </div>
        <br />
        <h3 className="tt">Qualité des résultats  </h3>
        <div className="promo">
          <label htmlFor="">
          Contribution à la problématique et méthodologie <br />
            <input type="text" name="contribution" placeholder="note ../15" className="inputp" onChange={handleChange}
            />
          </label>{" "}
          <br />
          <label htmlFor="" id="lbl">
          Qualité du travail et de la réalisation et/ou simulation <br />
            <input type="text" name="quality_travail" placeholder="note ../15" className="inputp" onChange={handleChange}
            />
          </label>{" "}
          <br />
        </div>

        <div className="promo">
          <label htmlFor="">
          Résultats expérimentaux et/ou simulation <br />
            <input type="text" name="resultat_exp" placeholder="note ../15" className="inputp" onChange={handleChange}
            />
         </label>{" "}
          <br />
          <label htmlFor="" id="lbl">
          Discutions et conclusions <br />
            <input type="text" name="discutions" placeholder="note ../15" className="inputp" onChange={handleChange}
            />
          </label>
          <br />
        </div>
        <br /> <br /> <br />
        <h3 className="tt" id='sisi'>Observations </h3>
        <ul>
            <li><h3>L'examinateur est tenu de respecter la confidentialité de l'évaluation conformément aux règles de l'éthique universitaire.</h3></li>
            <li><h3>L'examinateur est tenu de rédiger un rapport détaillé en cas de note strictement inférieure à 10 ou en cas de note strictement supérieure à 17. Ce rapport dûment paraphé doit accompagner la fiche d'évaluation.</h3></li>
        </ul>
        <button type="submit">Ajouter les informations</button>
      </form>
    </div>
    )
}

export default Evaluation