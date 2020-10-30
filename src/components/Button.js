import React from 'react'
//import './styles/button,css'
import buttonImg from '../images/data-button.png'
import { Link } from 'react-router-dom'
function Button (props){
    return(
        <Link to="/molding/data">
            <img src= {buttonImg} alt="" className=""/>
        </Link>
    )
}

export default Button