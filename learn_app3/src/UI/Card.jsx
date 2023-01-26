import React from 'react';
import c from './Card.module.css';

const Card = (props) => {
return <div className={`${c.card} ${props.cssClass}`}>
{props.children}
</div>


};


export default Card;