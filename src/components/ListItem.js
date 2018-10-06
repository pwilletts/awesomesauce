import React from 'react';

class ListItem extends React.Component {
    // route(event, sauce){
    //     this.props.history.push(`/detail/${sauce.name.replace(/[^\w\s]/gi, '').replace(/\s+/g, '-').toLowerCase()}`);
    // }

	render() {
		return(
            <li className="grid-x grid-margin-x" onClick={(e) => this.route(e, this.props.sauce)} key={this.props.sauce.name}>
                <div className="cell small-3">
                    <img src={this.props.sauce.image} alt={this.props.sauce.name} style={{maxHeight: '60px'}} />
                </div>
                <div className="cell small-9">
                    <p style={{marginBottom: '0'}}>{this.props.sauce.manufacturer}<br /><strong style={{fontSize: '18px'}}>{this.props.sauce.name}</strong></p>
                    <p>{this.props.sauce.peppers.join(', ')}</p>
                </div>
            </li>
		)
	}
}

export default ListItem;