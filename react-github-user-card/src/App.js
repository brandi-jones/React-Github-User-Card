import React from 'react';
import './App.css';
import axios from "axios"
import CardList from "./components/CardList.js";
import Card from "./components/Card.js";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      user: {},
      followers: []
    };

  }

  componentDidMount() {
    console.log("component mounted");

    //update state
    axios.get('https://api.github.com/users/brandi-jones')
    .then(response => {
      console.log("componentDidMount response 1, brandi-jones:", response) 

      this.setState({
        user: response.data,
        followers: getFollowers(response.data)
      })
    })
    .catch(error => {
      console.log(error)
    })



    //function to get followers of github user passed in
    function getFollowers(user) {

      let arrayFollowers = [];
      const followersUrl = user.followers_url; //get users followers list
      axios.get(followersUrl)
      .then(response => {
        console.log("getFollowers function axios response:", response);

        //arrayFollowers = response.data; <-- commented out, this is the way if we wanted to only get an array of followers from user.followers_url. We need to get futher acc info for things like location, bio, etc of followers

        response.data.forEach(follower => {
          axios.get(follower.url)
          .then(response => {
            arrayFollowers.push(response.data)

          })
          .catch(error => {
            console.log(error)
          })
        })

        console.log("arrayFollowers = ", arrayFollowers);
        console.log("array length", arrayFollowers.length)
      })
      .catch(error => {
        console.log(error)
      })

      return arrayFollowers;
    }
    

  }



  render() {
    console.log('rendering app...', this.state.followers)
    return (
      <>
        <p>test</p>
        {/*<CardList followers={this.state.followers} />*/}

        <Card follower={this.state.user}/>

        <div className="cardList">
            <h2>Followers:</h2>
            {console.log("state right before map in app: ", this.state.followers)}
            {console.log("length of array in state: ", this.state.followers.length)}
            {this.state.followers.map(user => {
               return(
                <Card key={user.id} follower={user}/>
                
               ) 
            })}

        </div>
      </>
    )
  }


}



export default App;

