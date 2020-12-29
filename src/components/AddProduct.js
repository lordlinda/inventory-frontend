import React, { useState } from "react";
import axios from "axios";
function AddProduct(props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name) {
      const data = {
        name,
        description,
      };
      await axios.post("https://strapi-inventory.herokuapp.com/drugs", data).then((res) => {
        props.addProduct(res.data);
      });
    }
  };
  return (
    <div>
      <h1>Add Product</h1>
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="equal width fields">
          <div className="field">
            <label>Name</label>
            <div className="ui fluid input">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="field">
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Tell us more about the drug..."
            rows="3"
          ></textarea>
        </div>

        <div className="field">
          <button className="ui primary button">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default AddProduct;
