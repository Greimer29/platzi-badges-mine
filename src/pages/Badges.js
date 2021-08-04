import React from 'react';
import './styles/Badges.css';
import Navbar from '../components/Navbar';
import confLogo from '../images/badge-header.svg';
import BadgeList from '../components/BadgeList';
import {Link} from 'react-router-dom';

class Badges extends React.Component {
    state={
        data: [
        {
          id: "2de30c42-9deb-40fc-a41f-05e62b5939a7",
          firstName: "Freda",
          lastName: "Grady",
          email: "Leann_Berge@gmail.com",
          jobTitle: "Legacy Brand Director",
          twitter: "FredaGrady22221-7573",
          avatarUrl: "https://www.gravatar.com/avatar/f63a9c45aca0e7e7de0782a6b1dff40b?d=identicon"
        },
        {
          id: "d00d3614-101a-44ca-b6c2-0be075aeed3d",
          firstName: "Major",
          lastName: "Rodriguez",
          email: "Ilene66@hotmail.com",
          jobTitle: "Human Research Architect",
          twitter: "ajorRodriguez61545",
          avatarUrl: "https://www.gravatar.com/avatar/d57a8be8cb9219609905da25d5f3e50a?d=identicon"
        },
        {
          id: "63c03386-33a2-4512-9ac1-354ad7bec5e9",
          firstName: "Daphney",
          lastName: "Torphy",
          email: "Ron61@hotmail.com",
          jobTitle: "National Markets Officer",
          twitter: "DaphneyTorphy96105",
          avatarUrl: "https://www.gravatar.com/avatar/e74e87d40e55b9ff9791c78892e55cb7?d=identicon"
        }
      ]}
    render(){
        return(
            <div>
                <Navbar/>

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
            </div>
        )
    }
}

export default Badges;