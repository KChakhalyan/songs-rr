import React from 'react';
import { connect } from 'react-redux';

const SongDetail = ({ song }) => {
	if (!song) {
		return <div>Select a song</div>;
	}
	return (
		<div>
			<h3>Song Details</h3>
			<p>
				<strong>Title: {song.title}</strong>
			</p>
			<p>Duration: {song.duration}</p>
		</div>
	);
};

const mapStateToProps = (state) => {
	return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
