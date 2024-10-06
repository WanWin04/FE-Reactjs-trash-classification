import React, { useState } from "react";
import "./Post.css";
import { FaUser, FaHeart, FaComment, FaShare } from "react-icons/fa";

function Post({ username, time, status, image, likes, comments, shares }) {
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(likes);
  const [showCommentBox, setShowCommentBox] = useState(false);
  const [commentText, setCommentText] = useState("");
  const [commentList, setCommentList] = useState([]);

  const handleLike = () => {
    setLiked(!liked);
    setLikesCount(liked ? likesCount - 1 : likesCount + 1);
  };

  const handleComment = () => {
    setShowCommentBox(!showCommentBox);
  };

  const handleCommentSubmit = (e) => {
    if (e.key === "Enter" && commentText.trim() !== "") {
      setCommentList([...commentList, commentText]);
      setCommentText("");
      setShowCommentBox(false);
    }
  };

  const handleCommentBlur = () => {
    setShowCommentBox(false);
  };

  return (
    <div className="post">
      <div className="post-header">
        <div className="post-user-icon">
          <FaUser />
        </div>
        <div className="post-user-info">
          <span className="post-username">{username}</span>
          <span className="post-time">{time}</span>
        </div>
      </div>
      <div className="post-status">{status}</div>
      {image && (
        <img
          src={image}
          alt="Post"
          className="post-image"
        />
      )}
      <div className="post-footer">
        <div className="post-footer-icon" onClick={handleLike}>
          <FaHeart className={`icon ${liked ? "liked" : ""}`} />
          <span className="count">{likesCount} thích</span>
        </div>
        <div className="post-footer-icon" onClick={handleComment}>
          <FaComment className="icon" />
          <span className="count">{commentList.length} bình luận</span>
        </div>
        <div className="post-footer-icon">
          <FaShare className="icon" />
          <span className="count">{shares} chia sẻ</span>
        </div>
      </div>

      {showCommentBox && (
        <div className="comment-box">
          <input
            type="text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            onKeyPress={handleCommentSubmit}
            onBlur={handleCommentBlur}
            placeholder="Nhập bình luận..."
            autoFocus
          />
        </div>
      )}

      <div className="comment-list">
        {commentList.map((comment, index) => (
          <div key={index} className="comment">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
