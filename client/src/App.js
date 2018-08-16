import React, { Component } from "react";

import "./App.css";
import Navbar from './Components/Navbar';
import ShoppingList from './Components/ShoppingList';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <ShoppingList />
      </div>
    );
  }
}

export default App;
