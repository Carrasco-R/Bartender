import { Link } from 'react-router-dom';

const Navbar = () => {

    return (  
        <nav className="Navbar">
            <h1>Osprey Cocktails</h1>
            <nav>
                <Link to="/" >Place Order</Link>
                <Link to="/ViewOrders">Order Queue</Link>
                <Link to="/AvailableOrders">Available Orders</Link>
            </nav>
            
        </nav>
    );
}
export default Navbar;