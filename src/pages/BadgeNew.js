import React from 'react';
import './styles/BadgeNew.css';
import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import api from '../api'

class BadgeNew extends React.Component {
    state={
        form:{}
    };

    handleChange = e =>{
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]:e.target.value
            }
        })
    }

    handleSubmit = async e =>{
        e.preventDefault();
        this.setState({
            loading:true,
            error:null
        });
        try{
            await api.badges.create(this.state.form);
            this.setState({
                loading:false,
                error:null
            });
        }catch(error){
            this.setState({
                loading:false,
                error:error
            });
        }
    }
    render(){
        return(
            <React.Fragment>
                <div className="badge__hero">
                    <img src={header} alt="Header" />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName || "First_Name"}
                                lastName={this.state.form.lastName || "Last_Name"} 
                                jobTitle={this.state.form.jobTitle || "Job_Title"}
                                twitter={this.state.form.twitter || "Twitter"}
                                email={this.state.form.email || "Email"}
                                // avatarImage="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200"
                            />
                        </div>
                        <div className="col-6">
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValue={this.state.form}
                                onSubmit={this.handleSubmit}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeNew;