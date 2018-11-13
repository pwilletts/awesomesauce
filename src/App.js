import React from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Search from './components/Search';
import ScrollList from './components/ScrollList';
import SauceDetail from './components/SauceDetail';
import Sauces from './components/Sauces';
import Login from './components/Login'
import Admin from './components/Admin'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'


var config = {
  apiKey: "AIzaSyAcUlDvfWy5tZDQh0sngWVsxrkUavgQyHw",
  authDomain: "top-design-222220.firebaseapp.com",
  databaseURL: "https://top-design-222220.firebaseio.com",
  projectId: "top-design-222220",
  storageBucket: "top-design-222220.appspot.com",
  messagingSenderId: "329070863010"
};
firebase.initializeApp(config);
var db = firebase.firestore();

// Might move this somewhere else
library.add(faChevronRight)

const data = require('./data/sauceData.json');

class App extends React.Component {
  state = {
    sauces: data,
    user: null
  }

  componentWillMount(){
    this.checkAuth()
  }

  checkAuth(){
    const results = [];
    firebase.auth().onAuthStateChanged(function(user) {
      db.collection('sauces').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          results.push({
            name: doc.name
          })
        })
      }).then(() => {
        console.log(results)
      })
      
      if (user) {
        // User is signed in.
        var user = firebase.auth().currentUser;
        return user
      } else {
        // No user is signed in.
        console.log('not signed in')
        return null
      }
    }.bind(this));
  }

  stateChange(userInfo){
    this.setState({user: userInfo}, function(){
      console.log(this.state.user)
    })
}

  render() {
    return (
      <div>
        <AppHeader user={this.state.user}/>    
        <BrowserRouter>
          <Switch>      
            <Route exact path='/' render={(props) =>
              <div>
                <Search {...props} sauces={this.state.sauces}/>             
                <ScrollList {...props} sauces={this.state.sauces}/>
              </div>}>
            </Route>
            <Route path='/admin' render={(props) =>
              <div>
                <Admin {...props} stateChange={this.stateChange.bind(this)}/>
              </div>}>
            </Route>
            <Route path='/login' render={(props) =>
              <div>
                <Login {...props} stateChange={this.stateChange.bind(this)}/>
              </div>}>
            </Route>
            <Route path='/sauces/:filter?' render={(props) => 
              <div>
                <Search {...props} sauces={this.state.sauces}/>
                <Sauces {...props} sauces={this.state.sauces}/>
              </div>}>
            </Route>
            <Route path='/detail/:sauceName' render={(props) => 
              <div>
                <Search {...props} sauces={this.state.sauces}/>
                <SauceDetail {...props} sauces={this.state.sauces}/>
              </div>}>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
