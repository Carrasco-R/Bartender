import React, { Component } from 'react'
import axios from "axios";

export default class ListOrders extends Component {
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
    }
    handleOrderUp = (id) => {
        console.log(id);
        axios({
            method: 'put',
            url: '/update',
            data: {
              _id: id,
            }
          });
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
            <button onClick={() => this.handleOrderUp(o._id)}>Order Up!</button>
        </div>);
        return listItems;
    }
    
    render() {
        return (
            <div className="OrderList">
                {this.listOrders()}
            </div>
        )
    }
}
