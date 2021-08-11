import React from 'react';
import LoadingPage from '../components/LoadingPage';
import ErrorPage from '../components/ErrorPage';
import api from '../api';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component{
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
        const badge = this.state.data;
        return(
            <BadgeDetails badge={badge}/>
        )
    }
}

export default BadgeDetailsContainer;