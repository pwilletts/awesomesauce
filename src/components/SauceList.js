import React from 'react';
import ListItem from './ListItem';

class SauceList extends React.Component {
	render() {
		return(
			<div className="SauceList">
				<ul>
					<ListItem
						history={this.props.history}
						sauce={this.props.sauce}
					/>
				</ul>
			</div>
		)
	}
}

export default SauceList;