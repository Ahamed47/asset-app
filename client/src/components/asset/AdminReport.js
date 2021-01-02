import React, { Fragment, useEffect, useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";

const AdminReport = () => {
  const [assets, setAssets] = useState([]);

  const getAssets = async () => {
    try {
      const response = await fetch("http://localhost:5000/assets");
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
        <h3>General Report</h3>
        <table className="table text-center table-striped">
          <thead className="table-dark">
            <tr>
              <th>Product</th>
              <th>Quantity</th>
              <th>Total Price</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((asset) => (
              <tr key={asset.product_id}>
                <td>{asset.product}</td>
                <td>{asset.quantity}</td>
                <td>{asset.totalprice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default AdminReport;
