import React from 'react'
import "./header.css"
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className="header">
        <h1>My Portfolio</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/projects">Projects</Link>
        </nav>
    </div>
  )
}

export default Header