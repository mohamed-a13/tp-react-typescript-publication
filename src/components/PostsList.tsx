import React from "react";
import { useNavigate } from "react-router-dom";
import { PostsData } from "../interface/postsData";
import "../styles/postsList.css";

interface PostsDataProps {
  allPosts: PostsData[] | null;
}

const PostsList: React.FC<PostsDataProps> = ({ allPosts }) => {
  const navigate = useNavigate();
  return (
    <ul className="posts">
      {allPosts?.map((post) => {
        return (
          <li key={post.id} onClick={() => navigate(`/${post.id}`)}>
            <h2>{post.title}</h2>
            <p>lire l'article</p>
          </li>
        );
      })}
    </ul>
  );
};

export default PostsList;
