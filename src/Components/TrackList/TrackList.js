import React from 'react';
import Track from '../Track /Track';
import './TrackList.css';

export class TrackList extends React.Component {
  renderMap(){
    if (this.props.tracks){
       
     return  this.props.tracks.map(track => {return <Track track={track}  key={track.id} onAdd={this.props.onAdd}/> });
       
    } else {
      return "booo"
    }
   }

  render() {
    return (
      <div className="TrackList">
        {/* <!-- You will add a map method that renders a set of Track components  --> */}
        {this.renderMap()}
      </div>
    );
  }
}

export default TrackList;