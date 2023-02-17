import React from "react";
import { Hero, Sidebar } from "../../components";
import "./home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="left">
          <Sidebar />
        </div>
        <div className="right">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default Home;
