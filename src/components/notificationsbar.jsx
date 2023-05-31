import { faXmark } from '@fortawesome/free-solid-svg-icons'
import women from '../assets/images/women.png';
import { faCheck} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react';
import Notif from './notif';
import { useEffect } from 'react';
import React from 'react';
function NotificationsBar({open, onClose}){
    const [notifications, setnotif] = useState([]);
    useEffect(() => {
        let ID = document.cookie.split('; ').find((row) => row.startsWith('id='))?.split('=')[1]
      fetch(`http://localhost:8000/api/notification/${ID}`, {
          credentials: 'include'
        })
          .then(response => response.json())
          .then(notifications => setnotif(notifications));
  }, []);
    if(!open) return null
    return (
        (
            <div className="notifpopup">
            <div className="notifbar">
            <div className='mark'>
                <h1>Notification</h1>
                <FontAwesomeIcon icon={faXmark} className='faxmark' onClick={onClose}/> 
            </div>
            <h3>Voir tout</h3>
            {notifications.map((notification,index) =>(
            <div className="notif">
             <div className="notiftop">
                <img src={women} alt="" />
                <h2>{notification.send_from.username} </h2>
                <h4>1 minute ago</h4>
             </div>
             <div className="notifbtm">
                <p id="notifcontent">
                {notification.titel} 
                </p>
                <FontAwesomeIcon icon={faXmark} className='no'/> 
                <FontAwesomeIcon icon={faCheck} className='yes'/>
             </div>
        </div>
        ))}
           </div>
        </div>
        )
    ) 
}

export default NotificationsBar