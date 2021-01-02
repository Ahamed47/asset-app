import React, { Fragment } from "react";

//components
import ManagerListAssets from "./ManagerListAssets";
import Navbar from "../navbar/Navbar";

function ManagerAsset() {
  return (
    <Fragment>
      <Navbar />
      <div className="container">
        <ManagerListAssets />
      </div>
    </Fragment>
  );
}

export default ManagerAsset;
