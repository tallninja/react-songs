import React from 'react';
import { connect } from 'react-redux';


class SongDetail extends React.Component {
    render() {
        return (
            this.props.selectedSong ?
            (
            <div className="ui segment">
                Title: {this.props.selectedSong.song.title}
                <br/>
                Artist: {this.props.selectedSong.song.artist}
                <br/>
                Duration: {this.props.selectedSong.song.duration}
            </div>
            ):
            (
                <div className="ui segment">
                    No song Selected
                </div>
            )
        );
    }
}

const mapStateToProps = (state) => {
    return { selectedSong: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)