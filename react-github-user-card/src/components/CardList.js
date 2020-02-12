import React from "react";
import Card from "./Card.js";

function CardList(props) {
    console.log("cardList props: ",props.followers)
    return (
        <div className="cardList">
            <h2>Followers:</h2>

            {props.followers.map(user => {
               return(
                <h2>test</h2>
                
               ) 
            })}

        </div>
    );
}

export default CardList;