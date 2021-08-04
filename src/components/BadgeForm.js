import React from 'react';

class BadgeForm extends React.Component {
    handleClick(e) {
        console.log('Botón clickeado');
    }
    handleSubmit = e => {
        e.preventDefault();
        console.log('Formulario enviado')
        console.log(this.state)
    }

    render() {
        return ( 
            <div>
                <h1> New Atendant </h1> 
                <form onSubmit={ this.handleSubmit}>
                    <div className="form-group">
                        <label> Firts Name </label> 
                        <input onChange={ this.props.onChange }
                            className = "form-control"
                            name = "firtsName"
                            type = "text"
                            value = { this.props.firtsName }
                        /> 
                    </div> 
                    <div className="form-group">
                        <label> Last Name </label> 
                        <input onChange = { this.props.onChange }
                            className = "form-control"
                            name = "lastName"
                            type = "text"
                            value = { this.props.lastName }
                        /> 
                    </div> 
                    <div className="form-group">
                        <label> Jobtitle </label> 
                        <input onChange={ this.props.onChange }
                            className = "form-control"
                            name = "ocupation"
                            type = "text"
                            value = { this.props.ocupation }
                        /> 
                    </div> 
                    <div className = "form-group" >
                        <label> Twitter </label> 
                        <input onChange = { this.props.onChange }
                            className = "form-control"
                            name = "twitter"
                            type = "text"
                            value = { this.props.twitter }
                        /> 
                    </div> 
                    <div className = "form-group" >
                        <label> Email </label> 
                        <input onChange = { this.props.onChange }
                            className = "form-control"
                            name = "email"
                            type = "email"
                            value = { this.props.email }
                        /> 
                    </div> 
                    <button onClick = { this.handleClick }
                        className = "btn btn-primary my-2" >
                        Save 
                    </button>   
                </form> 
            </div>
        )
    }
}

export default BadgeForm;