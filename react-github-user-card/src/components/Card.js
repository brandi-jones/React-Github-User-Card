import React from "react"
import {Card, CardImg, CardTitle, CardBody} from 'reactstrap';

function Card(props) {
    console.log(props)
    return(
       <Card className="card">
           <CardImg src={props.follower.avatar_url} alt="follower img"/>
           <CardBody className="cardInfo">
               <CardTitle>{props.follower.name}</CardTitle>
               <h4>{props.follower.login}</h4>
               <p>{props.follower.location}</p>
               <p>{props.follower.url}</p>
               <p>{`Followers: ${props.follower.followers} `}</p>
               <p>{`Following: ${props.follower.followers}`}</p>
               <p>{`Bio: ${props.follower.bio}`}</p>
           </CardBody>
       </Card> 
    );
};

export default Card;