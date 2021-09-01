import Navbar from './Navbar';
import Menu from './Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ListOrders from './ListOrders';
import AvailableOrders from './AvailableOrders';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Menu/>
            </Route>
            <Route exact path="/ViewOrders">
              <ListOrders/>
            </Route>
            <Route exact path="/AvailableOrders">
              <AvailableOrders/>
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}
export default App;