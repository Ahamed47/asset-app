import React, { Fragment } from "react";

//components
import InputAsset from "./InputAsset";
import ListAssets from "./ListAssets";
import AdminNavbar from "../navbar/AdminNavbar";

function Asset() {
  return (
    <Fragment>
      <AdminNavbar />
      <div className="container">
        <InputAsset />
        <ListAssets />
      </div>
    </Fragment>
  );
}

export default Asset;
