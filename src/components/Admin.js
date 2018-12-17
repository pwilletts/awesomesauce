import React from 'react';
import firebase from 'firebase';

class Admin extends React.Component {
    state = {
        selectedSauce: null
    }

    addSauce(){
        
    }

    updateOption(event){
        this.setState({selectedSauce: event.target.value})
    }

	render() {
		return(
            <div className="grid-container">
                <h4>Add some awesome sauce...or edit an existing sauce if you can't handle the heat...</h4>
                <select onChange={(e) => this.updateOption(e)}>
                    <option>...</option>
                    {this.props.sauces.map(
                        sauce => {
                            return(
                                <option key={sauce.name} value={sauce}>{sauce.name}</option>
                            )
                        }
                    )}
                </select>

                <label>Sauce Name</label>
                <input value={this.state.selectedSauce? this.state.selectedSauce.name : ""}></input>
                <label>Search Name</label>
                <input></input>
                <label>Rating</label>
                <input></input>
                <label>Peppers</label>
                <input></input>
                <label>Manufacturer Link</label>
                <input></input>
                <label>Manufacturer</label>
                <input></input>
                <label>Likes</label>
                <input></input>
                <label>Dislikes</label>
                <input></input>
                <label>Image</label>
                <input></input>
                <label>Heat Index</label>
                <input></input>
                <label>Sauce Description</label>
                <input></input>

                <button class="button">Save</button>
            </div>
		)
	}
}

export default Admin;