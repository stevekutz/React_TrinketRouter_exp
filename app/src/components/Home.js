import React from "react";

export default function(props) {
   console.log("Home props ", props);
 
    const randomTrinket = () => {
        const randomId = Math.floor(Math.random() * props.items.length )
        props.history.push(`/trinket/${randomId}`);
    }


   return (
        <div>
            <h3 style = {{
                border: '1px solid red',
                width: "100%",
                margin: "0 auto"
                }} 
            > Landing Page </h3>
        
           <button onClick = {randomTrinket}  > Random Trinket</button>    
        
        </div>

   )
}

// const randomId = Math.floor(Math.random() * 11 )