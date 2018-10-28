import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Search from './components/Search';
import ScrollList from './components/ScrollList';
import SauceDetail from './components/SauceDetail';
import Sauces from './components/Sauces';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

// Might move this somewhere else
library.add(faChevronRight)

const data = require('./data/sauceData.json');


class App extends React.Component {
  state = {
    sauces: data
  }

  render() {
    return (
      <div>
        <AppHeader/>    
        <BrowserRouter>
          <Switch>      
            <Route exact path='/' render={(props) =>
              <div>
                <Search {...props} sauces={this.state.sauces}/>             
                <ScrollList {...props} sauces={this.state.sauces}/>
              </div>}>
            </Route>
            <Route path='/sauces/:filter?' render={(props) => 
              <div>
                <Search sauces={this.state.sauces}/>
                <Sauces {...props} sauces={this.state.sauces}/>
              </div>}>
            </Route>
            <Route path='/detail/:sauceName' render={(props) => 
              <div>
                <Search sauces={this.state.sauces}/>
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
