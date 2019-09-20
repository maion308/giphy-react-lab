import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { URL } from './Constants'

/* 
 * Perhaps some hints?
 *
 * 1. Use a constructor and initialize state inside of it
 * 2. Set up an axios function in fetchRandomGif(). **Use your giphy api endpoint as url**
 * 3. call fetchRandomGif when the button on your page is clicked
 * 4. Set up a loading message until promise is resolved, and fetch status: 200 (optional)
 * 5. Save your data to your state, and have your render method display it on the page
 */

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      gifs: ""
    }
  }



  async fetchRandomGif() {
    try {
      const response = await axios.get(URL);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Giphy</h1>
        </header>
        <main>
          I'm going to show a random of gifs!
        </main>
      </div>
    );
  }
}

export default App;
