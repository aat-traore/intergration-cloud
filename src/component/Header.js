import React from 'react'
import {Link} from 'react-router-dom'
import '../style/header.css'
import Nav from './Nav'
import Service from './Service'

export default function header() {
    return (
        <>
        <div className='gr'>
            <ul>
            <li><Link  className="nav"to="/">Home</Link></li>  
            <li><Link className="nav" to="/Map">Map</Link></li>
            <li><Link  className="nav"to="/service">Service</Link></li>
            </ul>
            <button  className='pt'>Inscrire</button>
            <button  className='pt'>Connexion</button>
            
        </div>
        <Nav/>

        </>
    )
}
