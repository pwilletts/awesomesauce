import React from 'react'
import bcrypt from 'bcryptjs';
import firebase from 'firebase'

class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            newUser: false,
            errorCode: null
        }

        this.updateUser = this.updateUser.bind(this);
    }

    

    login(){
        firebase.auth().signInWithEmailAndPassword(document.getElementById('userName').value, document.getElementById('password').value).then(function(user) {
            this.props.history.push('/');
        }.bind(this))
    }

    create(){
        firebase.auth().createUserWithEmailAndPassword(document.getElementById('userName').value, document.getElementById('password').value).then(function(user) {
            this.updateUser()
        }.bind(this)).catch(function(error){
            alert(error);
        })
    }

    updateUser(){
        var user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: document.getElementById('name').value
          }).then(function() {
            // Update successful.
            this.props.stateChange(firebase.auth().currentUser)
            this.props.history.push('/')
          }.bind(this)).catch(function(error) {
            // An error happened.
          });
          
    }

    stateChange(event){
        this.setState({newUser: true})
    }

	render() {
		return(
            <div>
                <h5>Login Page</h5>

                {this.state.newUser ?<div>
                    <label>Name</label>
                    <input id="name" type='text'></input> 
                </div> : ""}            

                <label>UserName</label>
                <input id="userName" type='text'></input>

                <label>Password</label>
                <input id="password" type='password'></input>

                {this.state.newUser ? <div><label>Retype password</label>
                <input id="password2" type='password'></input></div> : ""}

                <button onClick={() => this.login()} href="#" class="button">Login</button>

                {!this.state.newUser ? <button onClick={(e) => this.stateChange(e)} style={{marginLeft:10}} href="#" class="button">New User?</button>: ""}

                {this.state.newUser ? <button onClick={(e) => this.create(e)} style={{marginLeft:10}} href="#" class="button">Create</button>: ""}
            </div>
		)
	}
}

export default Login;