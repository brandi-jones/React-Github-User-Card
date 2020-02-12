import React from 'react';
import './App.css';
import axios from "axios"
import CardList from "./components/CardList.js";
import UserCard from "./components/Card.js";


class App extends React.Component {

  constructor() {
    super();

    this.state = {
      user: {},
      followers: [],
    };

  }

  componentDidMount() {
    console.log("component mounted");

    //update user state
    axios.get('https://api.github.com/users/brandi-jones')
    .then(response => {
      console.log("componentDidMount response 1, brandi-jones:", response) 

      this.setState({
        user: response.data,
        //followers: getFollowers(response.data)
      })
    })
    .catch(error => {
      console.log(error)
    })

    //update followers state
    axios.get("https://api.github.com/users/brandi-jones/followers")
    .then(response => {
     
      response.data.map(user => {
      
        axios.get(user.url)
        .then(response => {
         
          this.setState({
            followers: [...this.state.followers, response.data]
          })
        })
        .catch(error => {
          console.log("ERROR:", error)
        })
      })
      

    })
    .catch(error => {
      console.log(error)
    })


    // // //function to get followers of github user passed in
    // function getFollowers(user) {

    //   let arrayFollowers = [];
    //   const followersUrl = user.followers_url; //get users followers list
    //   axios.get(followersUrl)
    //   .then(response => {
    //     console.log("getFollowers function axios response:", response.data);

    //     //arrayFollowers = response.data; // commented out, this is the way if we wanted to only get an array of followers from user.followers_url. We need to get futher acc info for things like location, bio, etc of followers

    //     response.data.forEach(follower => {
    //       axios.get(follower.url)
    //       .then(response => {
    //         arrayFollowers.push(response.data)

    //       })
    //       .catch(error => {
    //         console.log(error)
    //       })
    //     })

    //     console.log("arrayFollowers = ", arrayFollowers);
    //     console.log("array length", arrayFollowers.length)
    //   })
    //   .catch(error => {
    //     console.log(error)
    //   })

    //   return arrayFollowers;
    // }
    

  }

 


  render() {
    console.log('rendering app...', this.state.followers)
    return (
      <>
      <div className="container">
        <h1 className="followersText">My GitHub Followers</h1>
        <UserCard follower={this.state.user}/>
        
        <CardList followers={this.state.followers} />

      </div>
    
      </>
    )
  }


}



export default App;

