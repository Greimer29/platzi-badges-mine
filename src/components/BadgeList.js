import React from 'react';
import './styles/BadgeList.css';

class BadgeList extends React.Component {
    render() {
        return (
            <ul className="list-unstyled">
                {this.props.badges.map(badge => {
                    return(
                        <li key={badge.id} className="list__container">
                            <div className="image__container">
                                <img className="avatar__image" src={badge.avatarUrl} alt="Imagen" />
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