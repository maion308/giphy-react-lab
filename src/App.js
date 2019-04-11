import React, { Component } from 'react';
import './App.css';

import Axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      allGifs: null,
      isLoaded: null
    }
    console.log('init', this.state.allGifs); // console log my initial state for debugging

    // bind our API call functions to 'this' context.
    // look back on es6 classes for 'this' context.
    this.callGiphy.bind(this);
    this.callGiphyV2.bind(this);
  }

  // componentDidMount() is a React Life Cycle Method (it's a function!)
  // this react life cycle method gets priority once react app is rendered
  componentDidMount() {
    // this.callGiphy();
  }

  // 1st try: Use promises with fetch API.
  callGiphy() {
    let url = 'https://api.giphy.com/v1/gifs/random?api_key=lTTC7iqi7W2WJDhxz3EGbOil23uYmndh';

    return fetch(url)
    .then((response) => {
      // console.log(response.json());
      return response.json()
    })
    .then((data) => {
      const dataObj = data.data.images.original.url;
      this.setState({
        allGifs: dataObj,
        isLoaded: true
      });
      console.log('fetched', this.state.allGifs); // console log the state after it's set
    })
    .catch(err => console.log(err.message));
  }

  // 2nd try: Using Asnyc/Await with Axios
  async callGiphyV2() {
    try {
      const getGifs = await Axios({
        method: 'get',
        url: 'https://api.giphy.com/v1/gifs/random?api_key=lTTC7iqi7W2WJDhxz3EGbOil23uYmndh'
      });
      const gifObj = getGifs.data.data.images.original.url;
  
      this.setState({
        allGifs: gifObj,
        isLoaded: true
      })
      console.log('set', this.state.allGifs);
    } catch (err) {
      console.log(err.message);
    }
  }

  render() {
    /* set up a ternary for conditionally rendering.
     * the ternary is checking if this.state.isLoaded is true or false.
     * render 'Nope' if promise is rejected or if API call wasn't successful.
     * render <img> element when promise is resolved and state is set.
     */
    const checkFetch = this.state.isLoaded ? <img src={this.state.allGifs}></img> : <h1>Nope</h1>
    
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hi Jeopardy! You're great!</h1>
        </header>
        <main>
          { checkFetch }
        </main>
        <button onClick={() => this.callGiphy()}>Using Promises</button>
        <button onClick={() => this.callGiphyV2()}>Using Async/Await</button>
      </div>
    );
  }
}

export default App;
