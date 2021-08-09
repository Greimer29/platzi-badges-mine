import React from 'react';
import './styles/StatePage.css';

class ErrorPage extends React.Component {
    render(){
        return(
            <div className="state__page">
                <h2>{`Error: ${this.props.error}`}</h2>
            </div>
        )
    }
}

export default ErrorPage;