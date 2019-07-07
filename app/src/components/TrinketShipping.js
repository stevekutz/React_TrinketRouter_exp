import React from  'react';

export default function (props) {
   
    console.log("Inside TrinketShipping $$$$$$>>> ", props);
   
    return (
        <p className = 'item-description'>
            {props.shipping}
        </p>

    )
}