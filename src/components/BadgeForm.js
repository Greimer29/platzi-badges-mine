import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick(e){
        console.log('Botón clickeado');
        console.log(e);
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log('Formulario enviado')
    }

    render(){
        return(
            <div>
                <h1>New Atendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Firts Name</label>
                        <input onChange={this.handleChange} className="form-control" name="firtsName" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} className="form-control" name="lastName" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Jobtitle</label>
                        <input onChange={this.handleChange} className="form-control" name="ocupation" type="text" />
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} className="form-control" name="twitter" type="email" />
                    </div>
                    <button onClick={this.handleClick} type="button" className="btn btn-primary my-2">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;