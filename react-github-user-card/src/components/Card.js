import React from "react"
import {Card, CardImg, CardTitle, CardBody} from 'reactstrap';

function UserCard(props) {
    console.log(props)
    return(
       <Card className="card">
           <CardImg top width="100%" src={props.follower.avatar_url} alt="follower img"/>
           <CardBody className="cardInfo">
               <CardTitle>{props.follower.name}</CardTitle>
               <h4>{props.follower.login}</h4>
               <p>{props.follower.location}</p>
               <a href={props.follower.html_url}>{props.follower.html_url}</a>
               <p>{`Followers: ${props.follower.followers} `}</p>
               <p>{`Following: ${props.follower.followers}`}</p>
               <p>{`Bio: ${props.follower.bio}`}</p>
           </CardBody>
       </Card> 
    );
};

export default UserCard;