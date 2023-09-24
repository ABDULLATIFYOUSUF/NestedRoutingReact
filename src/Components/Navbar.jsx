import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>
      <ul>
        <li>
        <NavLink to="/Products">Products</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
