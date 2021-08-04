import React from 'react';
import logo from '../images/logo.svg';
import './styles/Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends React.Component {
    render(){
        return(
            <div className="navbar">
                <div className="container-fluid">
                    <Link className="navbar__brand" to="/">
                        <img className="navbar__brand-logo" src={logo} alt="Brand_logo" />
                        <span className="font-weight-ligth">Platzi</span>
                        <span className="font-weight-bold">Config</span>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;