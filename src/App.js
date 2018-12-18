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
import Signup from './components/Signup'
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
    sauces: null,
    user: null
  }

  componentWillMount(){
    this.getSauces()
    this.checkAuth()
  }

  checkAuth(){
    firebase.auth().onAuthStateChanged(function(user){
      if(user){
        this.setState({user: user}, function(){
          console.log(this.state.user)
        })
      } else {
        this.setState({user: user})
      }
    }.bind(this))
  }

  getSauces(){
    var results = []
    db.collection('sauces').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          results.push(doc.data())
        })
      })
      .then(function(){
        this.setState({sauces: results})
      }.bind(this))
  }

  stateChange(userInfo){
    this.setState({user: userInfo}, function(){
      console.log(this.state.user)
    })
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>      
            <Route exact path='/' render={(props) =>
              this.state.sauces ? <div>
                <AppHeader {...props} user={this.state.user}/>
                <Search {...props} sauces={this.state.sauces}/>             
                <ScrollList {...props} sauces={this.state.sauces}/>
              </div>: '' }>
            </Route>

            <Route path='/admin' render={(props) =>
              this.state.sauces ? <div>
                <AppHeader {...props} user={this.state.user}/>
                <Admin {...props} db={db} sauces={this.state.sauces} stateChange={this.stateChange.bind(this)}/>
              </div> : "Loading"}>
            </Route>

            <Route path='/login' render={(props) =>
              <div>
                <AppHeader {...props} user={this.state.user}/>
                <Login {...props} stateChange={this.stateChange.bind(this)}/>
              </div>}>
            </Route>

            <Route path='/signup' render={(props) =>
              <div>
                <AppHeader {...props} user={this.state.user}/>
                <Signup {...props} stateChange={this.stateChange.bind(this)}/>
              </div>}>
            </Route>

            <Route path='/sauces/:filter?' render={(props) => 
              <div>
                <AppHeader {...props} user={this.state.user}/>
                <Search {...props} sauces={this.state.sauces}/>
                <Sauces {...props} sauces={this.state.sauces}/>
              </div>}>
            </Route>

            <Route path='/detail/:sauceName' render={(props) => 
              this.state.sauces ? <div>
                <AppHeader {...props} user={this.state.user}/>
                <Search {...props} sauces={this.state.sauces}/>
                <SauceDetail {...props} sauces={this.state.sauces}/>
              </div>: "Loading"}>
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
