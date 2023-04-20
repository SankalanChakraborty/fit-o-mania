import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import logo from '../../assets/images/Logo-1.png'

const Navbar = () => {
  return (
    <div className="navbar-container">
        {/*</div>*Link to="/"><i className="fa-solid fa-dumbbell"></i></Link>*/}
        <Link to="/"><img src={logo} alt="website logo"/></Link>
        <div className="nav-links">
        <ul>
            <li><Link to="/">Home</Link></li>
            
        </ul>
        </div>
    </div>
  )
}

export default Navbar;
