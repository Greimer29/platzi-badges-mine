import React from 'react';
import './styles/BadgeDetails.css';
import confLogo from '../images/platziconf-logo.svg';
import LoadingPage from '../components/LoadingPage';
import ErrorPage from '../components/ErrorPage';
import api from '../api';
import Badge from '../components/Badge';
import {Link} from 'react-router-dom';

class BadgeDetails extends React.Component{
    state={
        loading:true,
        error:null,
        data:undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e =>{
        this.setState({loading:true,error:null});

        try{
            const data = await api.badges.read(this.props.match.params.badgeId);
            this.setState({loading: false, data:data});
        }catch(error){
            this.setState({loading:false,error:error});
        }

    }

    render(){
        if(this.state.loading){
            return <LoadingPage/>
        }
        if(this.state.error){
            return <ErrorPage/>
        }
        const {
            firstName,
            lastName,
            twitter,
            jobTitle,
            email,
            id
        } = this.state.data;
        return(
            <div>
                <div className="badgeDetails__hero">
                    <div className="container">
                        <div className="row">
                            <div className="col-6">
                                <img src={confLogo} alt="Logo de la conferencia" />
                            </div>
                            <div className="col-6 badgeDetails__hero-attendant-name">
                                <h1>{firstName} {lastName}</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={firstName}
                                lastName={lastName}
                                twitter={twitter}
                                jobTitle={jobTitle}   
                                email={email} 
                            />
                        </div>
                        <div className="col-6">
                            <div>
                                <div className="container badgeDetails__buttons">
                                    <Link className="btn btn-primary" to={`/badges/${id}/edit`}>
                                        Edit
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className="container badgeDetails__buttons">
                                    <button className="btn btn-danger">
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BadgeDetails;