import './App.scss';
import React from 'react';
import Home from './components/Home/Home';
import Characters from './components/Characters/Characters';
import Episodes from './components/Episodes/Episodes';
import Locations from './components/Locations/Locations';
import List from './components/List/List';

function App() {
  return (
    <div className="App">
      {/* Home section */}
      <Home />

      {/* Seccion Personajes */}
      <Characters />

      {/* Seccion Episodios */}
      <Episodes />

      {/* Seccion Lugares  */}
      <Locations />

      {/* Episodios por ver */}
      <List />
    </div>
  );
}

export default App;
