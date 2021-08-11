import React from 'react';
import Badge from '../components/Badge';
import {Link} from 'react-router-dom';
import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';

function BadgeDetails(props){
    const {
        firstName,
        lastName,
        twitter,
        jobTitle,
        email,
        id
    } = props.badge;
    return(
        <div>
            <div className="badgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src={confLogo} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 badgeDetails__hero-attendant-name">
                            <h1>{firstName} {lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Badge 
                            firstName={firstName}
                            lastName={lastName}
                            twitter={twitter}
                            jobTitle={jobTitle}   
                            email={email} 
                        />
                    </div>
                    <div className="col-6">
                        <div>
                            <div className="container badgeDetails__buttons">
                                <Link className="btn btn-primary" to={`/badges/${id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                        </div>
                        <div>
                            <div className="container badgeDetails__buttons">
                                <button className="btn btn-danger">
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails;