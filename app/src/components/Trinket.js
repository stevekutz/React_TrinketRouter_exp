import React from "react";
// import items from "../data";
import {Route, NavLink} from 'react-router-dom';
import Description from './TrinketDescription';
import Shipping from './TrinketShipping';
import Loader from 'react-loader-spinner';

export default function(props) {
  console.log("Inside Trinket ", props);

  const item = props.items.find(index => String(index.id) === props.match.params.id);

  if(!item) {
    return <Loader className="section" type="ThreeDots" color="blue" height="60" width="80" />
  }

  const id = item.id;  // 



  // we need to pass in id to nested route for Description & Shipping
  // const id = props.match.params.id;  // preferred as we are generating id from current page URL
   


  //console.log("item is >> ", item);
  //console.log('props passed to Trinket !!>> ', props);
  
  return (
    /* using dynamic params */
    <div className="item-wrapper">
      <div className="item-header">
        
          <div className="item-title-wrapper">
            <h3> params id is {props.match.params.id}</h3>
            <h2>{item.name}</h2>
            <h4>${item.price}</h4>
          </div>

          <div className="image-wrapper">
            <img className = "imageItem" src={item.imageUrl} alt={item.name} />
          </div>
       
      </div>

      <nav className = 'trinket-nav'>
        <NavLink activeClassName = "linkee1"  exact to = {props.match.url}>Description FC</NavLink>
        <NavLink activeClassName = "linkee2"  exact to = {`${props.match.url}/shipping`} >Shipping FC</NavLink>
      </nav>


      {/* 
            This will NOT allow us to pass in item as props into Description
      <Route path = 'trinket/:id' component = {Description}/>  
            !!!  we MUST use render props !!! */}
    <Route path = {props.match.path} exact render = { () => <Description description = {item.description}  /> }/>  
    <Route path = {`${props.match.path}/shipping`} exact render = { () => <Shipping  shipping = {item.shipping}/> }/>        
      
      

    </div>
  );
}
  
// <NavLink activeClassName = "linkee1"  exact to = {`/trinket/${id}`}>Description FC</NavLink>
// <NavLink activeClassName = "linkee2"  exact to = {`/trinket/${id}/shipping`} >Shipping FC</NavLink>

// <Route path = '/trinket/:id' exact render = { () => <Description description = {item.description}  /> }/>  
// <Route path = "/trinket/:id/shipping" exact render = { () => <Shipping  shipping = {item.shipping}/> }/>     