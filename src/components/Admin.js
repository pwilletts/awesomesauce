import React from 'react';
import firebase from 'firebase';

class Admin extends React.Component {
    addSauce(){
        
    }

	render() {
		return(
            <div>
                <h4>Add some awesome sauce...</h4>
                <label>Sauce Name</label>
                <input></input>
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