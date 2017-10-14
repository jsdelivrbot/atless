import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Home from './components/home/Home';
import Menu from './components/menu/Menu';
import NotFound from './components/not-found/NotFound';

const App = () => {
  return (
    <div>
      <Menu />
      <Switch>
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  )
}

export default App
