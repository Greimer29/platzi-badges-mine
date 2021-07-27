import React from 'react';
import configLogo from '../images/badge-header.svg';

class Badge extends React.Component{
    render(){
        return(
            <div>
                <div>
                    <img src={configLogo} alt="Esta es una imagen hijo de perra" />
                </div>
                <div>
                    <img src="" alt="Otra imagen hijo de perra" />
                    <h1>Greimer <br />Kmón</h1>
                </div>
                <div>
                    <p>Description</p>
                    <p>More description</p>
                </div>
                <div>
                    #PlatziConfigMmgvo
                </div>
            </div>
        )
    }
}

export default Badge;