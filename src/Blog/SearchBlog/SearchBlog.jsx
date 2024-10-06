import React from "react";
import "./SearchBlog.css";
import { FaSearch } from "react-icons/fa";

function SearchBlog() {
  return (
    <div className="search-container">
      <div className="input-wrapper">
        <FaSearch id="search-icon" />
        <input placeholder="Nhập nội dung cần tìm kiếm" />
      </div>
    </div>
  );
}

export default SearchBlog;
