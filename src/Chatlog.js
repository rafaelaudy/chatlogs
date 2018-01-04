import React, { Component } from 'react';
import PropTypes from 'prop-types';

import './Chatlog.css';

export const noAvatarImage = 'https://dummyimage.com/100x100/ffffff/000000&text=No+Avatar';

class Chatlog extends Component {
	constructor(props) {
		super(props);
		this.state = { isHovered: false };
		this.handleHover = this.handleHover.bind(this);
	}

	handleHover() {
		this.setState({
				isHovered: !this.state.isHovered
		});
	}

	render() {
		const emailClass = this.state.isHovered ? "Chatlog-email" : "Chatlog-email-hidden";

		return <div>
			<div className='Chatlog' onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
				<div className='Chatlog-date'>{(new Date(this.props.timestamp)).toLocaleDateString()}</div>
				<img className='Chatlog-logo' src={this.props.avatar ? this.props.avatar : noAvatarImage} alt='Avatar'/>
				<div className={emailClass}>{this.props.email}</div>
			</div>
		</div>
	}
}

Chatlog.propTypes = {
	avatar: PropTypes.string,
	email: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired
}

export default Chatlog;