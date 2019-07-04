import React from 'react';
import { Route, Link } from "react-router-dom"; // Router === BrowserRouter, its just an alias
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
    console.log("Rendering App");
    return (
      <div className="App">
        <nav>
          <h1 className="store-header">Jasons's Trinkets</h1>
          <div className="nav-links" >
            <Link to = '/'>Home</Link>
            <Link to = '/trinkets'>Trinkets </Link>
          </div> 
        </nav>

        {/* Use <Route> to attach URL path to a specific component  */}

        <Route exact path="/" component={Home} />
        {/*<Route path="/" exact component={Home} /> SAME AS ABOVE*/}
        <Route path="/trinkets" exact component={Trinkets} />
        <Route path="/trinket/:id" exact component={Trinket} />
      </div>
    );
  }
}

export default App;
