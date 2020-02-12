import React from "react";
import Card from "./Card.js";

function CardList(props) {
    console.log("cardList props: ", props)
    console.log("props.followers.length:", props.followers.length)
    return (
        <div className="cardList">
            <h2>Followers:</h2>

            {props.followers.map(user => {
               return(
                <Card key={user.id} follower={user}/>
                
               ) 
            })}

        </div>
    );
}

export default CardList;