import React from 'react';
import './styles/Home.css';
import logoConf from '../images/platziconf-logo.svg';
import lost from '../images/404 Error-rafiki.svg';
import {Link} from 'react-router-dom';

function NotFound(){
    return (
        <div className="home">
            <div className="container w-100">
                <div className="row">
                    <div className="home__col col-md-4">
                        <img src={logoConf} alt="logo-conf" className="img-fluid mb-4"/>
                        <h4>Whops Sorry Page not Found</h4>
                        <Link className="btn btn-primary" to="/">
                            Home Page
                        </Link>
                    </div>
                    <div className="col-md-8">
                        <img src={lost} alt="error404" className="img-fluid"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFound;