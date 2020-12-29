import "./App.css";
import StockEventsTable from "./components/StockEventsTable";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import AddProduct from "./components/AddProduct";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";
import Product from "./components/Product";
import Navbar from "./components/Navbar";
function App() {
  const [products, setProducts] = useState([]);
  const [stockEvents, setStockEvents] = useState([]);

  const fetchStockEvents = async () => {
    const res = await axios.get(
      "https://strapi-inventory.herokuapp.com/stockevents"
    );
    setStockEvents(res.data);
  };

  const fetchProducts = async () => {
    const res = await axios.get("https://strapi-inventory.herokuapp.com/drugs");
    setProducts(res.data);
  };

  useEffect(() => {
    fetchStockEvents();
    fetchProducts();
  }, []);
  const addProduct = (product) => {
    setProducts([product, ...products]);
  };
  console.log(products);
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
                <StockEventsTable
                  products={products}
                  stockEvents={stockEvents}
                  addProduct={addProduct}
                />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    </div>
  );
}

export default App;
