import React, { useEffect, useState } from "react";
import AdminNavbar from "../navbar/AdminNavbar";

const AdminHome = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/admin-dashboard/admin", {
        method: "POST",
        headers: { jwt_token: localStorage.token },
      });

      const parseData = await res.json();
      setName(parseData.user_name);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <AdminNavbar />
      <div className="container">
        <h1>Welcome {name}</h1>
      </div>
    </div>
  );
};

export default AdminHome;
