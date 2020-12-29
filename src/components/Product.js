import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import StockDetail from "./StockDetail";
import { Button, Modal } from "semantic-ui-react";
import AddStockEvent from "./AddStockEvent";

function Product({ products }) {
  const { name } = useParams();
  const [stockEvents, setStockEvents] = useState([]);
  const [open, setOpen] = useState(false);
  const fetchStockEvents = async () => {
    const res = await axios.get(
      "https://strapi-inventory.herokuapp.com/stockevents"
    );
    setStockEvents(res.data);
  };
  useEffect(() => {
    fetchStockEvents();
  }, []);
  const addEvent = (event) => {
    console.log(event);
    setStockEvents([event, ...stockEvents]);
  };
  return (
    <div>
      <h2>{name}</h2>
      <br />
      <Button onClick={() => setOpen(!open)}>Add new Event</Button>
      <br />
      <br />
      <Modal size="tiny" open={open} onClose={() => setOpen(false)}>
        <Modal.Content>
          <AddStockEvent
            product={products.filter((product) => product.name === name)}
            addStockEvent={addEvent}
          />
        </Modal.Content>
        <Modal.Actions>
          <Button positive onClick={() => setOpen(false)}>
            close
          </Button>
        </Modal.Actions>
      </Modal>
      <div className="ui cards">
        <h4>Stock Details</h4>
        <StockDetail
          stockEvents={stockEvents.filter((e) => e.drug?.name === name)}
        />
      </div>
    </div>
  );
}

export default Product;
