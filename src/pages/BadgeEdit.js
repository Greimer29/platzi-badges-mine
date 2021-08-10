import React from 'react';
import './styles/BadgeEdit.css';
import Badge from '../components/Badge';
import header from '../images/platziconf-logo.svg';
import BadgeForm from '../components/BadgeForm';
import api from '../api'
import LoadingPage from '../components/LoadingPage';

class BadgeEdit extends React.Component {
    state={
        loading:true,
        error:null,
        form:{}
    };

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({
            loading:true,
            error:null
        })

        try{
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({
                loading:false,
                form: data
            })
        }catch(error){
            this.setState({
                loading:false,
                error:error
            })
        }
    }

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
            await api.badges.update(this.props.match.params.badgeId ,this.state.form);
            this.setState({
                loading:false,
                error:null
            });

            this.props.history.push('/badges');
        }catch(error){
            this.setState({
                loading:false,
                error:error
            });
        }
    }
    render(){
        if(this.state.loading){
            return <LoadingPage/>
        }
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
                            <h1> Edit Atendant </h1> 
                            <BadgeForm 
                                onChange={this.handleChange}
                                formValue={this.state.form}
                                onSubmit={this.handleSubmit}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default BadgeEdit;