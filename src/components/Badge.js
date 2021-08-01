import React from 'react';
import configLogo from '../images/badge-header.svg';

import './styles/Badge.css';

class Badge extends React.Component{
    render(){
        return(
            <div className="badge container md-5">
                <div className="badge__header">
                    <img src={configLogo} alt="header_image" />
                </div>
                <div className="badge__section-name">
                    <img className="badge__avatar" src={this.props.avatarImage} alt="avatar_image" />
                    <h1>{this.props.firtsName}<br />{this.props.lastName}</h1>
                </div>
                <div className="badge__section-info">
                    <h3>{this.props.ocupation}</h3>
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