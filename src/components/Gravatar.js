import React from 'react';
import md5 from 'md5';

function Gravatar(props){
    const {email} = props;
    const hash = md5(email);
    return(
        <img className={props.className} src={`https://s.gravatar.com/avatar/${hash}?d=identicon`} alt="avatar_image" />
    )
}

export default Gravatar;