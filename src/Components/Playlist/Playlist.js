import React from 'react';
import './Playlist.css'

export class Playlist extends React.Component {
  constructor(props) {
  super(props);
}

  render() {
    return (
        <div class="Playlist">
        <input value="New Playlist"/>
        {/* <!-- Add a TrackList component --> */}
        <button class="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    );
  }
}

export default Playlist;