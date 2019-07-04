import React from "react";
import { Link } from "react-router-dom";
import items from "../data";

export default function(props) {
  console.log("Rendering Trinkets", props);

  return (
    <div className="items-list-wrapper">
      {items.map(item => (
        <Link to={`/trinket/${item.id}`} className="item-card" key={item.id}>
          <img
            className="item-list-image"
            src={item.imageUrl}
            alt={item.name}
          />
          <p>id:{item.id}</p>
          <p>{item.name}</p>
          <p>${item.price}</p>
        </Link>
      ))}
    </div>
  );
}