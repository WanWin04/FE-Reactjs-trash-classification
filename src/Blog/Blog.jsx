import React, { useState, useEffect } from "react";
import NavBar from "./NavBar/NavBar";
import SearchBlog from "./SearchBlog/SearchBlog";
import Setup from "./Setup/Setup";
import Post from "./Post/Post";
import CreatePost from "./CreatePost/CreatePost";
import axios from "axios";

function Blog() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [posts, setPosts] = useState([]);
  const [createdPosts, setCreatedPosts] = useState([]);

  // Fetch posts from backend
  useEffect(() => {
    if (selectedOption === 1) {
      axios
        .get("/api/posts/")
        .then((response) => {
          setPosts(response.data.results);
        })
        .catch((error) => {
          console.error("There was an error fetching the posts!", error);
        });
    }
  }, [selectedOption]);

  const handlePostSubmit = (newPost) => {
    axios
      .post("/api/posts/", newPost, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setCreatedPosts([response.data, ...createdPosts]);
      })
      .catch((error) => {
        console.error("There was an error creating the post!", error);
      });
  };

  const handleSelectionChange = (index) => {
    setSelectedOption(index);
  };

  return (
    <div>
      <NavBar />
      <SearchBlog />
      <Setup onSelectionChange={handleSelectionChange} />
      <main>
        {selectedOption === 1 &&
          posts.map((post) => (
            <Post
              key={post.id}
              username={post.author.username}
              time={new Date(post.created_at).toLocaleString()}
              status={post.title}
              image={post.image || "https://via.placeholder.com/600x400"}
              likes={post.like_count}
              comments={post.comment_count}
              shares={post.shares || 0}
            />
          ))}

        {selectedOption === 3 && (
          <CreatePost onPostSubmit={handlePostSubmit} />
        )}

        {selectedOption === 3 &&
          createdPosts.map((post) => (
            <Post
              key={post.id}
              username={post.author.username}
              time={new Date(post.created_at).toLocaleString()}
              status={post.title}
              image={post.image || "https://via.placeholder.com/600x400"}
              likes={post.like_count}
              comments={post.comment_count}
              shares={post.shares || 0}
            />
          ))}
      </main>
    </div>
  );
}

export default Blog;
