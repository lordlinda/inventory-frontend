import "./App.css";
import StockEventsTable from "./components/StockEventsTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const res = await axios.get("https://strapi-inventory.herokuapp.com/drugs");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const addProduct = (product) => {
    setProducts([product, ...products]);
  };
  return (
    <div>
      <div className="App">
        <Router>
          <Navbar />
          <br />
          <br />
          <Container>
            <Switch>
              <Route path="/product/:name">
                <Product products={products} />
              </Route>
              <Route path="/">
                <StockEventsTable products={products} addProduct={addProduct} />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </div>
  );
}

export default App;
