import React from 'react';
import './App.css';
import MainDrawer from './containers/MainMenu/MainMenu';


export const Context = React.createContext({
  name: 'Vipin Pal'
});

function App() {
  return (
    <div className="App">
      <MainDrawer />
    </div>
  );
}

export default App;
