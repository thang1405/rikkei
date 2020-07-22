import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopMenu from "./components/TopMenu";
import Products from "./pages/Products";
import Counter from "./components/Counter";
import { CartProvider } from "./context/Cart";

const Index = () => <Counter render={(state) => <h1>{state.count}</h1>} />;
//<Counter render={value => <h1>{value}</h1>}/>;

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <TopMenu />
          <Route path="/" exact component={Index} />
          <Route path="/products/" component={Products} />
        </div>
      </Router>
    </CartProvider>
  );
}
