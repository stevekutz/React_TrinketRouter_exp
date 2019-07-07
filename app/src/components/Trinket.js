import React from "react";
// import items from "../data";

export default function(props) {
  console.log("Inside Trinket ", props);

  const item = props.items.find(index => String(index.id) === props.match.params.id);
  // <h3>Trinket {props.match.params.id} </h3>
  console.log("item is >> ", item);
  console.log('props passed to Trinket !!>> ', props);
  
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

      <p className="item-description">{item.description}</p>
      <button className = 'shipping-info'> Shipping Info</button>

    </div>
  );
}
