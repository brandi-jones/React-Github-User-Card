import React from "react";
import Card from "./Card.js";
import axios from "axios";

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


// class CardList extends React.Component {
    
//     constructor () {
//         super();
//         this.state = {
//             followerAccs: []
//         };
//     }

//     componentDidMount() {
//         console.log("COMPONENT MOUNTED IN CARDLIST")
//         console.log(this.props.followers.length)
        

//     }

//     render() {
//         console.log("cardList props: ", this.props.followers)
//         return (
//             <div className="cardList">
//                 <h2>Followers:</h2>

//                 {this.props.followers.map(user => {
//                 return(
//                     <Card key={user.id} follower={user}/>
                    
//                 ) 
//                 })}

//             </div>
//         );
//     }
// }

// export default CardList;