import React from "react";
import Header from "./components/Header";
import PurchaseOrders from "./components/PurchaseOrders";
import OrderDetails from "./components/OrderDetails";
import NewProduct from "./components/NewProduct";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />

        <div className="main_container">
          <Switch>
            <Route exact path="/" component={PurchaseOrders} />
            <Route exact path="/order/:id" component={OrderDetails} />
            <Route exact path="/products/new" component={NewProduct} />
          </Switch>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
