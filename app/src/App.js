import React from 'react';
import Home from './Home';
import Article from './Article';
import { Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/blog/:id' component={Article}/>
      </Switch>
    </div>
  )
}

export default App
