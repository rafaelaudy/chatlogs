import React, { Component } from 'react';

import './Chatlogs.css';
import Chatlog from './Chatlog';
import getChatlog from './service';

class Chatlogs extends Component {
	componentDidMount() {
		getChatlog().then((chatlogs) => {
			this.setState({
				chatlogs
			});
		});
	}

	buildChatLogs() {
		const chatlogElements = [];
		if (this.state && this.state.chatlogs) {
			this.state.chatlogs.forEach((chatLog, index) => {
				chatlogElements.push(
					<Chatlog key={`chatlog-${index}`} avatar={chatLog.avatar} email={chatLog.email} timestamp={chatLog.timestamp}/>
				);
			});
		}

		return chatlogElements.length > 0 ? chatlogElements : '';
	}

	render() {
		return <div className='Chatlogs'>
			{this.buildChatLogs()}
		</div>;
	}
}

export default Chatlogs;
