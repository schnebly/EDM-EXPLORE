import React from 'react';
import './App.css';

import { Route } from 'react-router-dom';

import homePage from './pages/homePage/homePage.jsx';
import directory from './pages/directory/directory.jsx';

function App() {
  return (
    <div className="App">
      <Route exact path='/' component={homePage}/>
      <Route exact path='/directory' component={directory}/>
    </div>
  );
}

export default App;
