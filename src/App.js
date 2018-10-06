import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AppHeader from './components/AppHeader';
import Search from './components/Search';
import PopularSauces from './components/PopularSauces';
import SauceDetail from './components/SauceDetail';
const data = require('./data/sauceData.json');

class App extends React.Component {
  state = {
    sauces: data
  }

  render() {
    return (
      <div>
        <AppHeader/>
        <Search sauces={this.state.sauces}/>
        <BrowserRouter>
          <Switch>
            <Route exact path='/'>
              <PopularSauces sauces={this.state.sauces}/>
            </Route>
            <Route exact path='/detail/:sauceName' render={(props) => <SauceDetail {...props} sauces={this.state.sauces}/>}>
              
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
