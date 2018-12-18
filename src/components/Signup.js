import React from 'react'
import firebase from 'firebase'

class Login extends React.Component {
    state = {
        error: null
    }

    create(){
        var email = document.getElementById('email').value
        var name = document.getElementById('name').value
        var password = document.getElementById('password').value

        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function(user){
            firebase.auth().currentUser.updateProfile({
                displayName: name
            }).then(function(){
                this.props.history.push('/')
            }.bind(this)).catch(function(error){
                console.log(error)
            })
        }.bind(this))
        .catch(err => {
            console.log(err)
        })
    }

	render() {
		return(
            <div className='grid-container'>
                <h5>Signup Page</h5>

                <div>
                    <label>Email</label>
                    <input id="email" type='email'></input> 
                </div>         

                <label>Name</label>
                <input id="name" type='text'></input>

                <label>Password</label>
                <input id="password" type='password'></input>

                <button onClick={this.create.bind(this)} href="#" class="button">Create</button>

                {this.state.error ? <h5>{this.state.error}</h5> : ""}
            </div>
		)
	}
}

export default Login;