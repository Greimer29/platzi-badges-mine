import React from 'react';
import './styles/Badges.css';
import confLogo from '../images/badge-header.svg';
import BadgeList from '../components/BadgeList';
import {Link} from 'react-router-dom';
import api from '../api';

class Badges extends React.Component {
    state={
        loading:true,
        error:null,
        data:undefined
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async ()=>{
        this.setState({
            loading:true,
            error:null
        })

        try{
            const data = await api.badges.list();
            this.setState({
                loading:false,
                data:data
            })
        }catch(error){
            this.setState({
                loading:false,
                error:error,
            })
        }
    }

    componentDidUpdate(propsUlt,stateUlt){
        console.log({
            propsUlt:propsUlt, stateUlt:stateUlt
        })
        console.log({
            props:this.props,state:this.state
        })
    }

    componentWillUnmount(){
        console.log('6')
        clearTimeout(this.timeId)
    }

    render(){
        if(this.state.loading === true){
            return 'Loading...'
        }
        if(this.state.error){
            return(
                <h3>Something goes wrong <br />
                    {`Error: ${this.state.error.message}`}
                </h3>
            )
        }
        console.log('2. Render')
        return(
            <React.Fragment>
                <div className="badges">
                    <div className="badges__hero">
                        <div className="badges__container">
                            <img className="badges__conf-logo" src={confLogo} alt="Logo conf" />
                        </div>
                    </div>
                </div>
                <div className="badges__container">
                    <div className="badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary"> 
                            New Badge
                        </Link>
                    </div>
                    <div className="badges__list">
                        <div className="badges__container">
                            <BadgeList badges={this.state.data}/>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Badges;