import React from "react";
import "./sidebar.scss";
import {
  AiOutlineHome,
  AiOutlineAppstoreAdd,
  IoIosHelpCircleOutline,
  BiCategory,
} from "../../icons";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <Link to="/" className="side-nav__link">
            <AiOutlineHome className="icon" />
            <span>Store</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/" className="side-nav__link">
            <AiOutlineAppstoreAdd className="icon" />
            <span>Categories</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/" className="side-nav__link">
            <BiCategory className="icon" />
            <span>Menu</span>
          </Link>
        </li>
        <li className="side-nav__item">
          <Link to="/" className="side-nav__link">
            <IoIosHelpCircleOutline className="icon" />
            <span>Settings</span>
          </Link>
        </li>
      </ul>

      <div className="legal">&copy; 2023 by Sello. All rights reserved.</div>
    </nav>
  );
};

export default Sidebar;
