import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    searchResults: [{
      name: "boo",
      artist: "ursha",
      album: "remind",
      id: 23
    }, {
      name: "betty",
      artist: "Denky",
      album: "romance",
      id: 45
    }, {
      name: "Drake",
      artist: "betty",
      album: "Crush",
      id: 54
    }, {
      name: "best",
      artist: "drake",
      album: "remind2",
      id: 23
    }]
  }
}

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar />
        <div className="App-playlist">
          <SearchResults SearchResults = {this.state.searchResults}/>
          <Playlist />
        </div>
      </div>
    </div>

    );
  }
}

export default App;
