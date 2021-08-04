import React from 'react';
import './styles/Home.css';
import astroImage from '../images/astronauts.svg';
import logoConf from '../images/platziconf-logo.svg';
import {Link} from 'react-router-dom';

function Home(){
    return (
        <React.Fragment>
            <div className="home">
                <div className="container">
                    <div className="row">
                        <div className="home__col col-md-4 text-center">
                            <img src={logoConf} alt="confLogo" className="img-fluid mb-2"/>
                            <h3>PRINT YOUR BADGES</h3>
                            <p>
                                The easiest way to manage your Conference
                            </p>
                            <Link className="btn btn-primary w-100" to="/badges">
                                Start
                            </Link>
                        </div>
                        <div className="home__col col-md-8">
                            <img src={astroImage} alt="image_astronauts" className="img-fluid"/>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Home;