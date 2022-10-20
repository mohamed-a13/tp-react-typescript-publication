import React, { useState, useEffect } from "react";
import "../../styles/posts.css";
import PostsList from "../../components/PostsList";
import { PostsData } from "../../interface/postsData";

const Posts: React.FC = () => {
  const [allPosts, setAllPosts] = useState<PostsData[] | null>(null);
  const [numberOfPosts, setNumberOfPosts] = useState<number>(5);

  useEffect(() => {
    const getPosts = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts?_limit=${
          localStorage.getItem("number") || numberOfPosts
        }`
      );
      const data = await response.json();
      setAllPosts(data);
    };
    getPosts();
  }, [numberOfPosts]);

  const handleNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfPosts(+e.target.value);
    localStorage.setItem("number", e.target.value);
  };

  return (
    <div className="post-container">
      <h1>Accueil</h1>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="posts">
          Nombre de publication{" "}
          {localStorage.getItem("number") || numberOfPosts}
        </label>
        <input
          type="range"
          min={1}
          max={20}
          onChange={handleNumber}
          defaultValue={numberOfPosts}
        />
        <PostsList allPosts={allPosts} />
      </div>
    </div>
  );
};

export default Posts;
