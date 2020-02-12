import React from 'react';
import './App.css';
import axios from "axios"
import CardList from "./components/CardList.js";

class App extends React.Component {

  constructor() {
    super();

    this.state = {
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
        console.log("componentDidMount response 2, followers:", response);

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
        <CardList followers={this.state.followers} />
      </>
    )
  }





}



export default App;

