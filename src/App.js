import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import { CLIENT_URL } from './Constants';

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
  constructor(props) {
    super(props);
    this.state = {
      gif: "",
      title: "",
      source: ""
    }
}

fetchRandomGif = async () => {
  axios.get(CLIENT_URL)
      .then( response => {
        this.setState({
          gif: response.data.data.images.original,
          title:response.data.data.title,
          source:response.data.data.source
        })
      })
      .catch( err => console.log(err))

}

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Giphy</h1>
        </header>
        <main>
          <p>I'm going to show a random of gifs!</p>
          <button onClick={this.fetchRandomGif}>random gif</button>
          <img src={this.state.gif.url}></img>
          <p>{this.state.title}</p> 
          <p>{this.state.source}</p>
        </main>
      </div>
    );
  }
}

export default App;