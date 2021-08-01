import React from 'react';
import logo from '../images/badge-header.svg'
import './styles/Navbar.css';
class Navbar extends React.Component {
    render(){
        return(
            <div className="navbar">
                <div className="container-fluid">
                    <a className="navbar__brand" href="/">
                        <img className="navbar__brand-logo" src={logo} alt="Brand_logo" />
                        <span className="font-weight-ligth">Platzi</span>
                        <span className="font-weight-bold">Config</span>
                    </a>
                </div>
            </div>
        )
    }
}

export default Navbar;