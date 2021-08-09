import React from 'react';

class BadgeForm extends React.Component {
    handleClick(e) {
        console.log('Botón clickeado');
    }

    render() {
        return ( 
            <div>
                <h1> New Atendant </h1> 
                <form onSubmit={ this.props.onSubmit}>
                    <div className="form-group">
                        <label> Firts Name </label> 
                        <input onChange={ this.props.onChange }
                            className = "form-control"
                            name = "firstName"
                            type = "text"
                            value = { this.props.firstName }
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
                            name = "jobTitle"
                            type = "text"
                            value = { this.props.jobTitle }
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
                    {this.props.error &&
                        (<p className="text-danger">
                            {this.props.error.message}
                        </p>)
                    }
                </form> 
            </div>
        )
    }
}

export default BadgeForm;