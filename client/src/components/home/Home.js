import React, { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";

const Home = ({ setAuth }) => {
  const [name, setName] = useState("");

  const getProfile = async () => {
    try {
      const res = await fetch("http://localhost:5000/dashboard/", {
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
      <Navbar />
      <div className="container">
        <h1>Welcome {name}</h1>
      </div>
    </div>
  );
};

export default Home;
