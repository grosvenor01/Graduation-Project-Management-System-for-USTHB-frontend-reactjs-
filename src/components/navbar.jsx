import usthb from '../assets/images/usthb.png';
import React from 'react';
import { Link } from 'react-router-dom';
function NavBar(){
    return (
        <nav className="navbar">
            <img src={usthb} alt="" />
            <ul>
                <li><a href="/home" class="underline-hover-effect">Home</a></li>
                <li><a href="/studentprofile" class="underline-hover-effect">Profile</a></li>
                <li><a href="#" class="underline-hover-effect">About</a></li>
                <li><a href="#" class="underline-hover-effect">Contact</a></li>
            </ul>
            <Link to="/register"><button id='navbtn'>s'inscrire</button></Link>
        </nav>
    )
}

export default NavBar
