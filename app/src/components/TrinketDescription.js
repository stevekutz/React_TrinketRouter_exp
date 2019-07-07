import React from  'react';

export default function (props) {
   
    console.log("Inside TrinketDescription >>>>>>> ", props);
   
    return (
        <p className = 'item-description'>
            {props.description}
        </p>

    )
}

