import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faEnvelope, faPaperPlane, faBell} from '@fortawesome/free-solid-svg-icons'
import UserName from './username'
import NotificationsBar from './notificationsbar'
import { useState } from 'react'
import React from 'react';
import women from '../assets/images/women.png';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons'

function LeftBar(){

    const [openModal, setOpenModal] = useState(false) 
    
    const [infos, setInfos]= useState("")


    const handleChange = (e) =>{
        const {name, value }=e.target
        setInfos ((prev)=>{
            return {...prev, [name]: value}
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        console.log(infos);
        const response = await fetch("http://localhost:8000/api/login/",{
            method: "POST",
            credentials:'include',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(infos)
        })
        const result = await response.json();
        console.log(result)
        console.log(infos)
    }
    return (
        <div>
        <div className="leftbar">

            <div className="hsearch">
               <form className="searchbar" onSubmit={handleSubmit}>
                   
                   <input className='linput' type="text" placeholder='Search' onChange={handleChange } />
                   <button ><FontAwesomeIcon icon={faMagnifyingGlass} className='serachicon'/></button>
               </form>
               <div className="notificon">
                   <FontAwesomeIcon icon={faBell} className='bell' onClick={()=>setOpenModal(true)} />
                   <NotificationsBar open={openModal} onClose={()=>setOpenModal(false)} />
               </div>
            </div>

            <div className="lefttexts">
                <h1>Suggestion Pour vous</h1>
                <h2>All</h2>
            </div>

            <div className="user">
                <UserName/>
                <UserName/>
                <UserName/>
                <UserName/>
            </div>
        </div>
        </div>
    )
}

export default LeftBar