import faker from 'faker';
import Card from './Card';
import './Card.css';
import React from 'react';
import expertList from './expertList'

function cardComponent(expert, i){
    return <Card
    key = {expert.key}
    avatar ={expert.avatar}
    name ={expert.name}
    jobTitle ={expert.jobTitle }
    description ={expert.description }
    />
}

const CardList= ()=>
{
    return<div className="row">
   {expertList.map(cardComponent)}
    </div>
}

export default CardList