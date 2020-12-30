import React, { useState } from "react";
import axios from "axios";
function AddStockEvent({ product, addStockEvent, closeModal }) {
  const [data, setData] = useState({
    qty: "",
    type: "",
  });
  const { qty, type } = data;
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (product && type) {
      const data = {
        qty: type === "add" ? +qty : -qty,
        type,
        drug: product[0]._id,
      };
      await axios
        .post("https://strapi-inventory.herokuapp.com/stockevents", data)
        .then((res) => {
          addStockEvent(res.data);
        });
      closeModal();
    }
  };
  return (
    <div>
      <h3>New Stock Event</h3>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="equal width fields">
          <div className="field">
            <label>qty</label>
            <input
              type="number"
              value={qty}
              name="qty"
              onChange={handleChange}
            />
          </div>
          <div className="field">
            <label></label>
            <select name="type" onChange={handleChange} value={type}>
              <option value="">select type</option>
              <option value="add">add</option>
              <option value="remove">remove</option>
            </select>
          </div>
        </div>
        <button className="ui primary button">Create</button>
      </form>
    </div>
  );
}

export default AddStockEvent;
