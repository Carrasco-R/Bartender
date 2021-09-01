import React, { Component } from 'react'
import axios from "axios";

export default class AvailableOrders extends Component {
    constructor() {
        super();
        this.state = {
            orders: []
        }
    }
    async componentDidMount() {
        await axios
            .get('/all-orders')
            .then((res) => res.data)
            .then((orders) => this.setState({ orders }));
            console.log(this.state.orders);
    }
    listOrders = () => {
        let order = this.state.orders
        const listItems = order.map((o) => 
        <div key={o._id} className="order">
            <h2>{o.type}</h2>
            <p id="displayRocks">{o.rocks? "On the Rocks":"No Ice"}</p>
            <p id="displayGarnish">Garnish:  {o.garnish}</p>
            <p id="displayRim">Rim: {o.rim}</p>
            <h3>{o.fname + " " + o.lname}</h3>
            <button>Served</button>
        </div>);
        return listItems;
    }
    
    render() {
        return (
            <div className="AvailableOrders">
                {this.listOrders()}
            </div>
        )
    }
}
