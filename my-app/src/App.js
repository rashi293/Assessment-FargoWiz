import React from 'react';
import Home from './components/Home';
import './App.css';

const App = () => {
  return (
    <div>
      <h2 className='italic'>Fetching data from JSON placeholder</h2><hr />
      <Home />
    </div>
  );
}

export default App;
