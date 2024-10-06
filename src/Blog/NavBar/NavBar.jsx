import React, { useState } from "react";
import "./NavBar.css";
import { FaBars, FaUser } from "react-icons/fa";

function NavBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const func = () => {
    const hiddenFunc = document.querySelector(".hidden-func");
    hiddenFunc.classList.toggle("show");
  };

  return (
    <div id="navbar">
      <div id="logo-zone">
        <button id="logo">
          <img src="#" alt="logo" />
        </button>
      </div>
      <h2>XXXX</h2>
      <div id="func-head">
        {["TRANG CHỦ", "BLOG", "CLASSIFIER", "GAME", "STORE"].map((item, index) => (
          <div
            key={index}
            className={activeIndex === index ? "active" : ""}
            onClick={() => handleItemClick(index)}
          >
            {item}
          </div>
        ))}
      </div>
      <ul className="hidden-func">
        <li>TRANG CHỦ</li>
        <li>BLOG</li>
        <li>CLASSIFIER</li>
        <li>GAME</li>
        <li>STORE</li>
      </ul>
      <div id="mobile-func" onClick={func}>
        <i>
          <FaBars />
        </i>
      </div>
      <div className="user-login">
        <FaUser className="user-icon" />
        <span>Tên người dùng</span>
      </div>
    </div>
  );
}

export default NavBar;
