import React from 'react';
import './styles/BadgeList.css';
import {Link} from 'react-router-dom';
import Gravatar from './Gravatar';

function useSearchBadges(badges){
    const [query,setQuery] = React.useState('');
    const [filteredBadges,setFilteredBadges] = React.useState(badges);

    React.useMemo(()=>{
        const result = badges.filter(badge => {
            return `${badge.firstName} ${badge.lastName}`.toLowerCase().includes(query.toLowerCase())
        })
        setFilteredBadges(result);
    },[badges,query]
    )
    return {setQuery,filteredBadges,query}
}

function BadgeList(props) {
    const badges = props.badges;
    const {query,setQuery,filteredBadges} = useSearchBadges(badges);

        if(filteredBadges.length === 0){
            return(
                <div className="">
                    <div className="form-group my-3">
                        <label>Filter Badges</label>
                        <input type="text" 
                            className="form-control" 
                            value={query}
                            onChange={(e)=>{
                                setQuery(e.target.value)
                            }}
                        />
                    </div>
                    <h3>No se encontraron badges</h3>
                    <Link className="btn btn-primary" to="/badges/new">Create New Badge</Link>
                </div>
            )
        }
        return (
            <ul className="list-unstyled">
                <div className="form-group my-3">
                    <label>Filter Badges</label>
                    <input type="text" 
                        className="form-control" 
                        value={query}
                        onChange={(e)=>{
                            setQuery(e.target.value)
                        }}
                    />
                </div>
                {filteredBadges.map(badge => {
                    return(
                        <Link key={badge.id}className="text-reset  text-decoration-none list__container" to={`/badges/${badge.id}`}>
                            <li className="d-flex">
                                    <div className="image__container">  
                                        <Gravatar className="avatar__image" email={badge.email} alt="Imagen" />
                                    </div>
                                    <div className="container">
                                        <div>{badge.firstName} {badge.lastName}</div>
                                        <div> {badge.twitter} </div>
                                        <div>{badge.jobTitle}</div>
                                    </div>
                                </li>
                        </Link>
                    )
                })}
            </ul>
        )
}

export default BadgeList;