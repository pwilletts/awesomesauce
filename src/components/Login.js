import React from 'react'
import firebase from 'firebase'

class Login extends React.Component {
    state = {
        newUser: false,
        error: null
    }

    login(){
        const username = document.getElementById('username').value
        const password = document.getElementById('password').value

        firebase.auth().signInWithEmailAndPassword(username, password)
            .then(function(user){
                this.props.history.push('/')
            }.bind(this))
            .catch(function(err){
                var code = err.code
                var message = err.message
                this.setState({error: message})
            }.bind(this))
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
                <input id="username" type='text'></input>

                <label>Password</label>
                <input id="password" type='password'></input>

                {this.state.newUser ? <div><label>Retype password</label>
                <input id="password2" type='password'></input></div> : ""}

                <button onClick={() => this.login()} href="#" class="button">Login</button>

                {this.state.error ? <h5>{this.state.error}</h5> : ""}

                {!this.state.newUser ? <button onClick={(e) => this.stateChange(e)} style={{marginLeft:10}} href="#" class="button">New User?</button>: ""}

                {this.state.newUser ? <button onClick={(e) => this.create(e)} style={{marginLeft:10}} href="#" class="button">Create</button>: ""}
            </div>
		)
	}
}

export default Login;