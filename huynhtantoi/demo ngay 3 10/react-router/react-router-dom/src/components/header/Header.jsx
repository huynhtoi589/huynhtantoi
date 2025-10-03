

import { NavLink } from 'react-router-dom'
import './header.css'
export default function Header() {
  return (
    <div className="header">
      <ul>
        <li>
          <NavLink
            to="/home"
          
          >Home</NavLink>
        </li>
        <li>
             <NavLink
            to="/about"
            
          >about</NavLink>
        </li>
      </ul>
    </div>
  )
}
