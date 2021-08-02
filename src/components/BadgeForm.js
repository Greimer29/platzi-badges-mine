import React from 'react';

class BadgeForm extends React.Component {
    handleChange = e =>{
        console.log({
            name: e.target.name,
            value: e.target.value
        })
    }
    handleClick = e =>{
        console.log("Botón clickeado");
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
                    <button onClick={this.handleClick} type="button" className="btn btn-primary">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;