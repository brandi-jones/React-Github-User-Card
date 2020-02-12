import React from "react"

function Card(props) {
    console.log(props)
    return(
       <div className="card">
           <img src={props.follower.avatar_url} alt="follower img"/>
           <div className="cardInfo">
               <h3>{props.follower.name}</h3>
               <h4>{props.follower.login}</h4>
               <p>{props.follower.location}</p>
               <p>{props.follower.url}</p>
               <p>{`Followers: ${props.follower.followers} `}</p>
               <p>{`Following: ${props.follower.followers}`}</p>
               <p>{`Bio: ${props.follower.bio}`}</p>
           </div>
       </div> 
    );
};

export default Card;