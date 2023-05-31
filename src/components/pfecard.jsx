
import React from 'react';
import { useState, useEffect } from 'react';

function PfeCard({details,onUpdateDetails}) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDetails, setEditedDetails] = useState({
    ...details,
    id: details.id  
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedDetails({
      ...editedDetails,
      [name]: value
    });
  };

  const handleSaveClick = (e) => {
    e.preventDefault();
    setEditedDetails({
     ...editedDetails,
     name: e.target.name.value, 
     detail: e.target.detail.value,
     cmpt1: e.target.cmpt1.value,
     cmpt2: e.target.cmpt2.value,
     cmpt3: e.target.cmpt3.value  
    });      
    onUpdateDetails(editedDetails);      
  }

  const handleEditClick = () => {
    setEditedDetails(details);  
    setIsEditing(true);
  }

  useEffect(() => {
    setEditedDetails(details);
  }, [details]);


  return (
    <div className="pfecard">
      {isEditing ? (
        <form onSubmit={handleSaveClick}>
          <input type="text" name="name" value={editedDetails.name} onChange={handleInputChange} />
          <input type="text" name="detail" value={editedDetails.detail} onChange={handleInputChange} />
          <input type="text" name="cmpt1" value={editedDetails.cmpt1} onChange={handleInputChange} />
          <input type="text" name="cmpt2" value={editedDetails.cmpt2} onChange={handleInputChange} />
          <input type="text" name="cmpt3" value={editedDetails.cmpt3} onChange={handleInputChange} />
          <button>Enregistrer</button>
        </form>
      ) : (
        <>
          <h1>{details.name}</h1>
          <h3>Détails : </h3>
          <h4>{details.detail} </h4>
          <h3>Competance requits </h3>
          <div className="cmpts">
            <div className="cmpt"> {details.cmpt1}</div>
            <div className="cmpt">{details.cmpt2}</div>
            <div className="cmpt">{details.cmpt3}</div>
          </div>
          <button onClick={handleEditClick}>Modifier</button>
        </>
      )}
    </div>
  );
}

export default PfeCard;

{/*import React from 'react';
function PfeCard({details}) {
    return (
        <div className="pfecard">
            <h1>{details.name}</h1>
            <h3>Détails : </h3>
            <h4>{details.detail} </h4>
            <h3>Competance requits </h3>
            <div className="cmpts">
                <div className="cmpt"> {details.cmpt1}</div>
                <div className="cmpt">{details.cmpt2}</div>
                <div className="cmpt">{details.cmpt3}</div>
            </div>
            <button >Modifier</button>
        </div>
    )
}

export default PfeCard*/}


