// import React from 'react';
//
//
//
//
// // Player
// var Player = React.createClass({
// 	getInitialState: function() {
// 		return {
// 			playStatus: 'play',
// 			currentTime: 0
// 		}
// 	},
// 	getDefaultProps: function() {
// 		return {
// 			track: {
// 				name: "We Were Young",
// 				artist: "Odesza",
// 				album: "Summer's Gone",
// 				year: 2012,
// 				artwork: "https://funkadelphia.files.wordpress.com/2012/09/odesza-summers-gone-lp.jpg",
// 				duration: 192,
// 				source: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/wwy.mp3"
// 			}
// 		}
// 	},
// 	render: function() {
// 		return (
// 			<div className="Player">
// 				<div className="Background" style={{'backgroundImage': 'url(' + this.props.track.artwork + ')'}}></div>
// 				<div className="Header"><div className="Title">Now playing</div></div>
// 				<div className="Artwork" style={{'backgroundImage': 'url(' + this.props.track.artwork + ')'}}></div>
// 				<TrackInformation track={this.props.track} />
// 				<Scrubber />
// 				<Controls />
// 				<Timestamps duration={this.props.track.duration} currentTime={this.state.currentTime} />
// 				<audio>
// 					<source src={this.props.track.source} />
// 				</audio>
// 			</div>
// 		)
// 	}
// });
//
// var TrackInformation = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="TrackInformation">
// 				<div className="Name">{this.props.track.name}</div>
// 				<div className="Artist">{this.props.track.artist}</div>
// 				<div className="Album">{this.props.track.album} ({this.props.track.year})</div>
// 			</div>
// 		)
// 	}
// });
//
// var Scrubber = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="Scrubber">
// 				<div className="Scrubber-Progress"></div>
// 			</div>
// 		)
// 	}
// });
//
// var Controls = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="Controls">
// 				<div className="Button">
// 					<i className="fa fa-fw fa-play"></i>
// 				</div>
// 			</div>
// 		)
// 	}
// });
//
// var Timestamps = React.createClass({
// 	render: function() {
// 		return (
// 			<div className="Timestamps">
// 				<div className="Time Time--current">{this.props.currentTime}</div>
// 				<div className="Time Time--total">{this.props.duration}</div>
// 			</div>
// 		)
// 	}
// });
// convertTime: function(timestamp) {
//     let minutes = Math.floor(timestamp / 60);
//   let seconds = timestamp - (minutes * 60);
//     if (seconds < 10) { seconds = '0' + seconds; }
//     timestamp = minutes + ':' + seconds;
//     return timestamp;
// }
// togglePlay: function() {
//   let status = this.state.playStatus;
//   let audio = document.getElementById('audio');
//   if(status === 'play') {
//     status = 'pause'; audio.play();
//   } else {
//     status = 'play'; audio.pause();
//   }
//   this.setState({ playStatus: status });
// }
// render: function() {
//   let classNames;
//   if (this.props.isPlaying == 'pause') {
//     classNames = 'fa fa-fw fa-pause';
//   } else {
//     classNames = 'fa fa-fw fa-play';
//   }
//   return {...}
// }
// updateTime: function(timestamp) {
//   timestamp = Math.floor(timestamp);
//   this.setState({ currentTime: timestamp });
// }
// audio.play();
// let _this = this;
// setInterval(function() {
//   .....
//   _this.updateScrubber(percent);
//   _this.updateTime(currentTime);
// }, 100);
//
// // Render the UI
// ReactDOM.render(
// 	<Player />,
// 	document.querySelector('body')
// );
//
//
// export default Music;
