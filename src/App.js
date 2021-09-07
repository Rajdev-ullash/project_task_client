import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { createContext, useState } from 'react';
import Home from "./Components/Home/Home";
import Admin from "./Components/Admin/Admin";
import AddService from "./Components/Admin/AddService/AddService";
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import SpecificProduct from "./Components/Home/SpecificProduct/SpecificProduct";
import Login from './Components/Login/Login';
import OrderList from "./Components/Admin/OrderList/OrderList";
import AllOrderList from "./Components/Admin/AllOrderList/AllOrderList";
import MakeAdmin from "./Components/Admin/MakeAdmin/MakeAdmin";
export const UserContext = createContext();

function App() {

  const [loggedIn, setLoggedIn] = useState({});
  const [products, setProducts] = useState([]);
  return (
    <div>
      <UserContext.Provider value={{ log: [loggedIn, setLoggedIn], productsData: [products, setProducts] }}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/dashboard">
              <Admin></Admin>
            </PrivateRoute>
            <Route path="/addProduct">
              <AddService></AddService>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path="/orderList">
              <OrderList />
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin />
            </Route>
            <Route path="/allOrderList">
              <AllOrderList></AllOrderList>
            </Route>
            <PrivateRoute path='/product/:_id'>
              <SpecificProduct />
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
