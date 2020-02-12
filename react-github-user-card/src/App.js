import React from 'react';
import './App.css';
import axios from "axios"

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      followers: []
    };

  }

  componentDidMount() {
    console.log("component mounted");

    axios.get('https://api.github.com/users/brandi-jones')
    .then(response => {
      console.log("componentDidMount response 1, brandi-jones:", response) 
      this.setState({
        followers: getFollowers(response.data) //empty for now, set to getFollowers(response.data) later
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
        arrayFollowers = response;
        console.log("arrayFollowers = ", arrayFollowers);
        
      });

      return arrayFollowers;
    }


  }



  render() {
    return (
      <div>hello test</div>
    )
  }





}



export default App;

