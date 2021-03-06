import React from 'react';
import { Route, Link } from "react-router-dom"; // Router === BrowserRouter, its just an alias
// BrowserRouter is a HOC, a components that takes in another component

import Home from "./components/Home";
import Trinkets from "./components/Trinkets";
import Trinket from "./components/Trinket";
import TrinketClassComp from './components/TrinketClassComp';


import './App.css';
import data from './data';

class App extends React.Component {
  // add constructor and CDM
  
  /*
  constructor() {
    super();
    this.state = {
      items: []
    };
  }
  */

  // when using create-react-app, we can set state this way
  state = {
    items: [],
  }



  componentDidMount() {
    this.setState({ items: data });
  }

  render() {
    console.log("Rendering App");

    const {items} = this.state;
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
        {/* *we originally used the component prop to define what component to render/}
        <Route exact path="/" component={Home} />
        {/*<Route path="/" exact component={Home} /> SAME AS ABOVE*/}
        {/* we replace this apporach with render props*/}
        {/*<Route path="/trinkets" exact component={Trinkets} /> */}
        

        {/* with render props, Route is a HOC with render props and/or child Component */}
        <Route path = '/' exact render = { (props) => {
            return <Home {...props}  items = {items}/>
        }}/>
        <Route path = '/trinkets'exact render = { (props) => {
          return <Trinkets {...props} items = {items}/>
        }}/>
        {/*
        <Route path = '/trinket/:id' exact render = { (props) => {
          return <Trinket {...props} items = {items}/>
        }} />  
        */}    {/* implicit return used here */}
                {/* MUST remove exact in order to implement nested routes */}


        <Route path = "/trinket/:id" render = { (props) => <TrinketClassComp {...props} items = {data}/> } />

      {/* <Route path="/trinket/:id" exact component={Trinket} /> */}   
      {/*  <Route path="/trinket/:id" exact component={TrinketClassComp} />   */}
        </div>
    );
  }
}

export default App;



//  <Route path = "/trinket/:id" render  = { (props) => <Trinket {...props} items = {data}/>} />
//   <Route path = "/trinket/:id" render = { (props) => <TrinketClassComp {...props} items = {data}/> } />