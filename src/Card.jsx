import expertList from './expertList'
import './Card.css';
import React from 'react';

const Card= (props)=>
{
    return<div className = 'column'>
   <img src = {props.avatar} alt ='Experts'/>
   <h4>{props.name}</h4>
   <p>{props.jobTitle}, {props.description}</p>
   <img className= "star" src={require('./images/star.PNG').default} alt = 'Stars'/>
    </div>
}

export default Card