import React, { useState } from "react";
import "./Setup.css";

function Setup({ onSelectionChange }) {
  const [selected, setSelected] = useState(null);

  const handleClick = (index) => {
    setSelected(index);
    onSelectionChange(index);
  };

  return (
    <div className="setup">
      <li
        className={selected === 1 ? "active" : ""}
        onClick={() => handleClick(1)}
      >
        Dành cho bạn
      </li>
      <li>|</li>
      <li
        className={selected === 3 ? "active" : ""}
        onClick={() => handleClick(3)}
      >
        Bài viết
      </li>
    </div>
  );
}

export default Setup;
