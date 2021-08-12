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
                        <Link key={badge.id}className="text-reset  text-decoration-none list__container" to={`/badges/${badge.id}`}>
                            <li className="d-flex">
                                    <div className="image__container">  
                                        <Gravatar className="avatar__image" email={badge.email} alt="Imagen" />
                                    </div>
                                    <div className="container">
                                        <div>{badge.firstName} {badge.lastName}</div>
                                        <div> {badge.twitter} </div>
                                        <div>{badge.jobTitle}</div>
                                    </div>
                                </li>
                        </Link>
                    )
                })}
            </ul>
        )
    }
}

export default BadgeList;