import { combineReducers } from 'redux';


const songListReducer = () => {
    return [
        { title: 'Overture', artist: 'Bach', duration: '4:00' },
        { title: '2nd Symphony', artist: 'Bethooven', duration: '3:17' },
        { title: 'Cannon', artist: 'Pachbell', duration: '5:20' },
        { title: 'Nutcracker', artist: 'Vinght', duration: '4:30' }
    ]
}


const selectedSongReducer = (songSelected = null, action) => {
    if(action.type === 'SELECT_SONG') return action.payload;
    return songSelected;
}


export default combineReducers({
    songs: songListReducer,
    selectedSong: selectedSongReducer
})