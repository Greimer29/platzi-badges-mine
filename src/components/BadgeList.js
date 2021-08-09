import React from 'react';
import './styles/BadgeList.css';
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';

class BadgeList extends React.Component {
    render() {
        if(this.props.badges.length === 0){
            return(
                <div>
                    <h3>No se encontraron badges</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create New Badge</Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return(
                        <li key={badge.id} className="list__container">
                            <div className="image__container">
                                <Gravatar className="avatar__image" email={badge.email} alt="Imagen" />
                            </div>
                            <div className="container">
                                <div>{badge.firstName} {badge.lastName}</div>
                                <div> {badge.twitter} </div>
                                <div>{badge.jobTitle}</div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        )
    }
}

export default BadgeList;