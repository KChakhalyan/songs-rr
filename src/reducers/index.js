import { combineReducers } from 'redux';

const songReducer = () => {
	return [
		{ title: 'No Scrubs', duration: '4:05' },
		{ title: 'Macarena', duration: '2:46' },
		{ title: 'All Stars', duration: '3:04' },
		{ title: 'I want it that way', duration: '4:44' },
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === 'SONG_SELECTED') {
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer,
});
