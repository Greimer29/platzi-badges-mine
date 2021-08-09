import React from 'react';
import configLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';
import './styles/Badge.css';

class Badge extends React.Component{
    render(){
        return(
            <div className="badge container">
                <div className="badge__header">
                    <img src={configLogo} alt="header_image" />
                </div>
                <div className="badge__section-name">
                    <Gravatar className="badge__avatar" email={this.props.email} alt="avatar_image" />
                    <h1>{this.props.firstName}<br />{this.props.lastName}</h1>
                </div>
                <div className="badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>
                <div className="badge__footer">
                    #PlatziConfigMmgvo
                </div>
            </div>
        )
    }
}

export default Badge;