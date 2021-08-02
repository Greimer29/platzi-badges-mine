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
                                firtsName="Richard"
                                lastName="Kaufman"
                                ocupation="Frontend Engineer"
                                twitter="sparragus"
                                avatarImage="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
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