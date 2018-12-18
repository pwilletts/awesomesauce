import React from 'react';
import firebase from 'firebase'

class AppHeader extends React.Component{
    logOut(){
        firebase.auth().signOut()
        .then(function(result){
            this.props.history.push('/')
        }.bind(this))
        .catch(function(err){
            console.log(err)
        }.bind(this))
    }

    render(){
        return(
        <header>
            <h1>Awesome Sauce.<span>App</span></h1>
            {!this.props.user ? <h4><a href="/login">Login</a></h4> : `Welcome ${this.props.user.displayName}`}
            <br></br>
            {!this.props.user ? <h4><a href="/signup">Signup</a></h4> : ``}
            <br></br>
            {this.props.user ? <button className="button" onClick={this.logOut.bind(this)}>Log Out</button> : ""}
        </header>
        )
    }
}

export default AppHeader;