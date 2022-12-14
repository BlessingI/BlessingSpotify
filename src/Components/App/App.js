import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import Spotify from '../../util/Spotify';

class App extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    searchResults: [{
      name: "boo",
      artist: "ursha",
      album: "remind",
      id: 1345
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
      id: 8
    }],
    playlistName: "My PlayList",
    playlistTracks: [{
      name: "booga",
      artist: "qat",
      album: "rest",
      id: 1
    },
    {
      name: "wet",
      artist: "sweet",
      album: "vul",
      id: 2
    },
    {
      name: "red",
      artist: "sexy",
      album: "delicious",
      id: 456
    },
    {
      name: "groosh",
      artist: "krat",
      album: "viv",
      id: 4
    }
  ]
  }
  this.addTrack = this.addTrack.bind(this)
  this.removeTrack = this.removeTrack.bind(this)
  this.updatePlaylistName = this.updatePlaylistName.bind(this)
  this.savePlaylist = this.savePlaylist.bind(this)
  this.search = this.search.bind(this)
}

addTrack(track){
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  } else {
    this.state.playlistTracks.push(track)
  }
  this.setState({playlistTracks: this.state.playlistTracks})
}

removeTrack(track){
  let tracks = this.state.playlistTracks;
  tracks= tracks.filter(savedTrack => savedTrack.id !== track.id)

  this.setState({playlistTracks: tracks})
}

updatePlaylistName(name){
  this.setState({playlistName: name })
}

savePlaylist(){
  const trackURIs = this.state.playlistTracks.map(track => track.uri)
}

search(term){
  Spotify.search(term).then(searchResults => {
    this.setState({searchResults: searchResults})
  })
}

  render() {
    return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App">
        <SearchBar onSearch={this.search}/>
        <div className="App-playlist">
          <SearchResults SearchResults = {this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist}/>
        </div>
      </div>
    </div>

    );
  }
}

export default App;
