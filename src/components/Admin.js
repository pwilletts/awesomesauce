import React from 'react';
import firebase from 'firebase';

class Admin extends React.Component {
    state = {
        selectedSauce: null
    }

    componentWillMount(){
        this.setBlankSauce()
    }

    setBlankSauce(){
        //initalize empty selected sauce
        var obj = {}
        if(!this.state.searchName){
            Object.keys(this.props.sauces[0]).map(function(key) {
                obj[key] = ''
            })
            this.setState({selectedSauce: obj})
        }
    }

    addSauce(){
        var valid = true;
        Object.keys(this.state.selectedSauce).map(function(key) {
            if(valid){
                if(this.state.selectedSauce[key] === ""){
                    valid = false;
                }  
            }               
        }.bind(this))

        if(!valid){
            alert("Please ensure you have entered data in all fields");
        } else {
            this.props.db.collection('sauces').add(this.state.selectedSauce)
            .then(ref => {
                console.log(ref);
            })
        }    
    }

    updateOption(event){
        if(event.target.value === '...'){
            this.setBlankSauce()
        } else {
            this.setState({selectedSauce: JSON.parse(event.target.value)})
        }        
    }

    handleStateChange(event, target, key){
        var temp = this.state.selectedSauce
        temp[key] = event.target.value
        this.setState({selectedSauce: temp})
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
                                <option key={sauce.name} value={JSON.stringify(sauce)}>{sauce.name}</option>
                            )
                        }
                    )}
                </select>

                <label>Name</label>
                <input value={this.state.selectedSauce.name} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'name')}></input>

                <label>Search Name</label>
                <input id={"searchName"} value={this.state.selectedSauce.searchName} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'searchName')}></input>

                <label>Rating</label>
                <input value={this.state.selectedSauce.rating} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'rating')}></input>

                <label>Peppers</label>
                <input style={{width:250}} value={this.state.selectedSauce.peppers} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'peppers')}></input>

                <label>Manufacturer Link</label>
                <input style={{width:600}} value={this.state.selectedSauce.mfrLink} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'mfrLink')}></input>

                <label>Manufacturer</label>
                <input value={this.state.selectedSauce.manufacturer} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'manufacturer')}></input>

                <label>Likes</label>
                <input value={this.state.selectedSauce.likes} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'likes')}></input>

                <label>Dislikes</label>
                <input value={this.state.selectedSauce.dislikes} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'dislikes')}></input>

                <label>Image</label>
                <input style={{width:600}} value={this.state.selectedSauce.image} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'image')}></input>

                <label>Heat Index</label>
                <input value={this.state.selectedSauce.heatIndex} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'heatIndex')}></input>

                <label>Sauce Description</label>
                <textarea style={{height:150}} value={this.state.selectedSauce.desc} onChange={(e) => this.handleStateChange(e, 'selectedSauce', 'desc')}></textarea>

                <button className="button" onClick={this.addSauce.bind(this)}>Save</button>
            </div>
		)
	}
}

export default Admin;