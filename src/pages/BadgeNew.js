import React from 'react';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import Navbar from '../components/Navbar';
import header from '../images/badge-header.svg';
import BadgeForm from '../components/BadgeForm';

class BadgeNew extends React.Component {
    render(){
        return(
            <div>
                <Navbar/>

                <div className="badge__hero">
                    <img src={header} alt="Header" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firtsName="Greimer"
                                lastName="Pérez"
                                jobtitle="Full Stack Developer"
                                twitter="greimerabelguzman29@gmail.com"
                                avatar="https://www.gravatar.com/avatar?d=identicon"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeNew;