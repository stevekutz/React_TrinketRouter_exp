import React from 'react';
import items from '../data';


class TrinketClassComp extends React.Component {
// class components pass props by default
/*
    constructor(props) {
        super(props);
        this.state = {
            showInfo: false,
        }
    }
*/

    render()    
    {
        console.log('>>> Class Component props are >> ', this.props);
        const item = items.find(index => String(index.id) === this.props.match.params.id);

        return (
            <div className = "item-wrapper"> 
                <div className = "item-header">
                            
                    <div className = "item-title-wrapper">
                        <h3> params id is {this.props.match.params.id}</h3>
                        <h2>{item.name}</h2>
                        <h4>${item.price}</h4>
                        
                    </div>  
                    
                    <div className = 'image-wrapper'>
                        <img className = 'imageItem' src = {item.imageUrl} alt = {item.name}/>
                    </div>
                </div>
                        
                <p className = 'item-description'>{item.description}</p>
                <button className = 'shipping-info'> Shipping Info</button>
            </div>
        )
    }
}

export default TrinketClassComp;
