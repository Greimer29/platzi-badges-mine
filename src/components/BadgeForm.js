import React from 'react';

class BadgeForm extends React.Component {
    state = {
        firtsName:"",
        lastName:"",
        ocupation:"",
        twitter:""
    };
    handleChange = e =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    handleClick(e){
        console.log('Botón clickeado');
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log('Formulario enviado')
        console.log(this.state)
    }

    render(){
        return(
            <div>
                <h1>New Atendant</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Firts Name</label>
                        <input onChange={this.handleChange} className="form-control" name="firtsName" type="text" value={this.state.firtsName}/>
                    </div>
                    <div className="form-group">
                        <label>Last Name</label>
                        <input onChange={this.handleChange} className="form-control" name="lastName" type="text" value={this.state.lastName}/>
                    </div>
                    <div className="form-group">
                        <label>Jobtitle</label>
                        <input onChange={this.handleChange} className="form-control" name="ocupation" type="text" value={this.state.ocupation}/>
                    </div>
                    <div className="form-group">
                        <label>Twitter</label>
                        <input onChange={this.handleChange} className="form-control" name="twitter" type="email" value={this.state.twitter}/>
                    </div>
                    <button onClick={this.handleClick} className="btn btn-primary my-2">
                        Save
                    </button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;