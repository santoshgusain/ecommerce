import "./App.css";
import Home from "./screens/Home";
import ProductDetails from "screens/ProductDetails";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {Provider} from 'react-redux'

import store from './store'

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/product">
          <Home />
        </Route>
        <Route exact path="/product/:product_id">
          <ProductDetails />
        </Route>
        <Route exact path="/support">
          <Home />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;
