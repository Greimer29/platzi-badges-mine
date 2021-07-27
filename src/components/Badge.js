import React from 'react';
import configLogo from '../images/badge-header.svg';

import './styles/Badge.css';

class Badge extends React.Component{
    render(){
        return(
            <div className="badge">
                <div className="badge__header">
                    <img src={configLogo} alt="Esta es una imagen hijo de perra" />
                </div>
                <div className="badge__section-name">
                    <img className="badge__avatar" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?d=identicon" alt="Otra imagen hijo de perra" />
                    <h1>Un pana <br />Ahí</h1>
                </div>
                <div className="badge__section-info">
                    <p>Frontend Engineer</p>
                    <p>@sparragus</p>
                </div>
                <div className="badge__footer">
                    #PlatziConfigMmgvo
                </div>
            </div>
        )
    }
}

export default Badge;