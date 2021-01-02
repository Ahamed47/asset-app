import React, { Fragment, useEffect, useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";

const ListRequest = () => {
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
      <AdminNavbar />
      <div className="container">
        <table className="table text-center table-striped">
          <thead className="table-dark">
            <tr>
              <th>Request ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.product_id}>
                <td>{asset.product_id}</td>
                <td>{asset.product}</td>
                <td>{asset.category}</td>
                <td>{asset.quantity}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteAsset(asset.product_id)}
                  >
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default ListRequest;
