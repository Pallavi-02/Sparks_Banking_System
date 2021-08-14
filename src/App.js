import "./style.css";
import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Home from "./Components/Home";
import ViewCustomer from "./Components/ViewCus";
import TransferMoney from "./Components/Transfer";
import Navbar from "./Components/Navbar";
import Adduser from "./Components/Adduser";
import { Redirect, Route, Switch ,useLocation} from "react-router-dom";


const App = () => {
  let location= useLocation();
  return (
    <>
      <Navbar/>
      <Switch key={location.key} location={location}>
      <Route exact path="/" component={Home} />
      <Route exact path="/adduser" component={Adduser} />
        <Route exact path="/viewcus" component={ViewCustomer} />
        <Route exact path="/transfer" component={TransferMoney} />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default App;
