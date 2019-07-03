import React from 'react';
import ReactDOM from "react-dom";
import { Route } from "react-router-dom"; // Router === BrowserRouter, its just an alias
// BrowserRouter is a HOC, a components that takes in another component

import Home from "./components/Home";
import Trinkets from "./components/Trinkets";
import Trinket from "./components/Trinket";


import './App.css';
import data from './data';

class App extends React.Component {
  // add constructor and CDM
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Jasons's Trinkets</h1>
          <div className="nav-links" />
          {/* Using a tags uses ServerSideRouting, causes refresh!*/}
          <a href="/">Home</a>
          <a href="trinkets">Trinkets</a>
        </nav>

        {/* Use <Route> to attach URL path to a specific component  */}

        {/* <Home /> */}

        <Route exact path="/" component={Home} />
        {/*<Route path="/" exact component={Home} /> SAME AS ABOVE*/}
        <Route path="/trinkets" exact component={Trinkets} />
        <Route path="/trinket" exact component={Trinket} />
      </div>
    );
  }
}

export default App;
