import React, { Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Signin from './Signin';
import Signup from './Signup';
import Todos from './Todos'


class App extends Component {
  render() {
    return (
      <Router>
        <Route exact path='/' component={Todos} />
        <Route exact path='/signin' component={Signin} />
        <Route exact path='/signup' component={Signup} />

      </Router>
    );
  }
}

export default App;
