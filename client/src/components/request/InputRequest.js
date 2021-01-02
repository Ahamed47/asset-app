import React, { Fragment, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Request.css";

const InputAsset = () => {
  const [product, setProduct] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { product, category, quantity };
      const response = await fetch("http://localhost:5000/requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/request";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <Navbar />
      <div className="container contain">
        <h1 className="text-center">Request Form</h1>
        <form onSubmit={onSubmitForm}>
          <div className="mb-3">
            <label>Product</label>
            <input
              type="text"
              placeholder="product"
              className="form-control in"
              pattern="[a-zA-Z ]+"
              required
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Category</label>
            <input
              type="text"
              placeholder="category"
              className="form-control in"
              pattern="[a-zA-Z ]+"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="mb-3">
            <label>Quantity</label>
            <input
              type="text"
              placeholder="quantity"
              className="form-control in"
              pattern="[0-9]{1,4}"
              required
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </div>
          <button className="btn btn-primary btn-lg btn-block">Request</button>
        </form>
      </div>
    </Fragment>
  );
};

export default InputAsset;
