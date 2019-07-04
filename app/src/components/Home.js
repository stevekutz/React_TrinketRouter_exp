import React from "react";

export default function(props) {
   console.log("Home props ", props);
   return <h3 style = {{
    border: '1px solid red',
    width: "100%",
    margin: "0 auto"
    }} > Landing Page </h3>;
}
