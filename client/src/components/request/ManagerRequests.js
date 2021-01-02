import React, { Fragment, useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

const ManagerRequests = () => {
  const [assets, setAssets] = useState([]);

  //delete asset function
  const deleteAsset = async (id) => {
    try {
      const deleteAsset = await fetch(`http://localhost:5000/requests/${id}`, {
        method: "DELETE",
      });

      setAssets(assets.filter((asset) => asset.product_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getAssets = async () => {
    try {
      const response = await fetch("http://localhost:5000/requests");
      const jsonData = await response.json();

      setAssets(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getAssets();
  }, []);

  console.log(assets);

  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <table className="table text-center table-striped">
          <thead className="table-dark">
            <tr>
              <th>Request ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.product_id}>
                <td>{asset.product_id}</td>
                <td>{asset.product}</td>
                <td>{asset.category}</td>
                <td>{asset.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ManagerRequests;
