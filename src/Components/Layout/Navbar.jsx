import React from 'react'
import { Link } from "react-router-dom"
import { useProductStates } from "../utils/Context/ProductContext"
import "./Navbar.css"



  const Navbar = () => {
    const { state, dispatch } = useProductStates()    

  return (
  
    <nav className={state.darkMode ? "container-dark" : "container-light"}>
      
      <h2>D<span style={{ color: 'red' }}>H</span> Odonto</h2>
      <ul className="navLinks ">
        <Link className='link' to="/">Home</Link>
        <Link className='link' to="/contact">Contact</Link>
        <Link className='link' to="/favs">Favs</Link>
        <button onClick={()=> dispatch( {type: "CHANGE_MODE"} ) }>{state.darkMode ? '☀️' : '🌙'}</button>
          
      </ul>   
      
    </nav>
  )
}

export default Navbar