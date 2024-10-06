import React, { useState } from "react";
import { FaUser, FaImage } from "react-icons/fa";
import "./CreatePost.css";

const getRelativeTime = (time) => {
  const currentTime = new Date();
  const postTime = new Date(time);
  const timeDifference = currentTime - postTime;

  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years > 0) {
    return `${years} năm trước`;
  } else if (months > 0) {
    return `${months} tháng trước`;
  } else if (days > 0) {
    return `${days} ngày trước`;
  } else if (hours > 0) {
    return `${hours} giờ trước`;
  } else if (minutes > 0) {
    return `${minutes} phút trước`;
  } else {
    return "Vừa xong";
  }
};

function CreatePost({ onPostSubmit }) {
  const [status, setStatus] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = () => {
    if (status.trim()) {
      const postTime = new Date();
      onPostSubmit({
        username: "Thắng Dương",
        time: getRelativeTime(postTime),
        status,
        image,
        likes: 0,
        comments: 0,
        shares: 0,
      });
      setStatus("");
      setImage(null);
    }
  };

  return (
    <div className="create-post">
      <div className="create-post-header">
        <FaUser className="user-avatar" />
        <input
          type="text"
          placeholder="Bạn đang nghĩ gì?"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        />
      </div>
      {image && (
        <div className="image-preview">
          <img src={image} alt="Preview" />
        </div>
      )}
      <div className="create-post-footer">
        <label htmlFor="image-upload">
          <FaImage className="icon" /> Thêm ảnh
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: "none" }}
        />
        <button onClick={handleSubmit} className="post-button">
          Post
        </button>
      </div>
    </div>
  );
}

export default CreatePost;
