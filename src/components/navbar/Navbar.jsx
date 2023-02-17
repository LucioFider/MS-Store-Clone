import React from "react";
import "./navbar.scss";
import { MdOutlineHardware, AiOutlineSearch, AiOutlineUser } from "../../icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <header className="header">
        <div className="main-logo">
          <MdOutlineHardware className="logo" />
          <h1>Open Store</h1>
        </div>
        <form action="#" className="search">
          <input
            type="text"
            className="search__input"
            placeholder="Search products by category or name"
          />
          <button className="search__button">
            <AiOutlineSearch className="icon" />
          </button>
        </form>
        <nav className="user-nav">
          <div className="user-nav__user">
            <AiOutlineUser className="icon" />
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;
