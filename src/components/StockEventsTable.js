import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Icon, Button, Modal } from "semantic-ui-react";
import AddProduct from "./AddProduct";

function StockEventsTable(props) {
  const { products, stockEvents } = props;
  const [open, setOpen] = useState(false);
  const addProduct = (product) => {
    props.addProduct(product);
  };
  console.log(props);
  return (
    <div className="StockEventTable">
      <div>
        <h2>Musawo's Drugstore Inventory</h2>
        <a onClick={() => setOpen(!open)}>
          <Icon name="plus" />
          Add New Product
        </a>
        <Modal size="tiny" open={open} onClose={() => setOpen(false)}>
          <Modal.Content>
            <AddProduct addProduct={addProduct} />
          </Modal.Content>
          <Modal.Actions>
            <Button positive onClick={() => setOpen(false)}>
              close
            </Button>
          </Modal.Actions>
        </Modal>
        <div className="ui cards">
          {products.map((product) => (
            <div className="ui card" key={product._id}>
              <div className="content">
                <NavLink to={`/product/${product.name}`}>
                  <div className="header">{product.name}</div>
                </NavLink>

                <div className="meta">
                  {stockEvents
                    .filter((event) => event.drug?._id === product._id)
                    .reduce((acc, curr) => acc + curr.qty, 0)}{" "}
                  stock left
                </div>
                <div className="description">{product.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default StockEventsTable;
