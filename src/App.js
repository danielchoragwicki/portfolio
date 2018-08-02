import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"
import Header from './components/Header'
import './main.css'

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Header />
            <Route exact path='/' render={props => (<div>Daniel Chorągwicki</div>)}/>
            <Route path="/o-mnie" render={props => (<div className="asdasd">o mnie</div>)}/>
            <Route path="/portfolio" render={props => (<div>p</div>)}/>
            <Route path="/kontakt" render={props => (<div>k</div>)}/>
            <Redirect to="/"/>
          </Fragment>
      </Router>
    );
  }
}

export default App;
