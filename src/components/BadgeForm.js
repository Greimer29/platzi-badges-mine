import React from 'react';

class BadgeForm extends React.Component {
    handleClick(e) {
        console.log('Botón clickeado');
    }

    render() {
        return ( 
            <div>
                <form onSubmit={ this.props.onSubmit}>
                    <div className="form-group">
                        <label> Firts Name </label> 
                        <input onChange={ this.props.onChange }
                            className = "form-control"
                            name = "firstName"
                            type = "text"
                            value = { this.props.formValue.firstName }
                        /> 
                    </div> 
                    <div className="form-group">
                        <label> Last Name </label> 
                        <input onChange = { this.props.onChange }
                            className = "form-control"
                            name = "lastName"
                            type = "text"
                            value = { this.props.formValue.lastName }
                        /> 
                    </div> 
                    <div className="form-group">
                        <label> Jobtitle </label> 
                        <input onChange={ this.props.onChange }
                            className = "form-control"
                            name = "jobTitle"
                            type = "text"
                            value = { this.props.formValue.jobTitle }
                        /> 
                    </div> 
                    <div className = "form-group" >
                        <label> Twitter </label> 
                        <input onChange = { this.props.onChange }
                            className = "form-control"
                            name = "twitter"
                            type = "text"
                            value = { this.props.formValue.twitter }
                        /> 
                    </div> 
                    <div className = "form-group" >
                        <label> Email </label> 
                        <input onChange = { this.props.onChange }
                            className = "form-control"
                            name = "email"
                            type = "email"
                            value = { this.props.formValue.email }
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