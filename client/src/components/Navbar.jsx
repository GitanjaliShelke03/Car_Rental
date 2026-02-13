import React from 'react'
import {assets} from '../assets'  
import { Link } from 'react-router-dom'//Navigate without page reload

const Navbar = () => {
  return (
    <div>   
       <Link to="/">
         <img src={assets.logo} alt="Logo" className="h-8"/>
       </Link>
         </div>
  )
}

export default Navbar