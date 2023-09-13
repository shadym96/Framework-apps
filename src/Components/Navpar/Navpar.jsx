import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navpar() {
  return <>
  
<nav className="navbar navbar-expand-lg  ">
  <div className="container-fluid py-4 ">
    <NavLink className="navbar-brand fs-2" to="/">Start Framework </NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse box" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="portflio">Portoflio</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="contact">Contact</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
  
  
  
  
  </>
}
