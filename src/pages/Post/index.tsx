import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { PostsData } from "../../interface/postsData";
import "../../styles/post.css";

type PostParams = {
  id: string;
};

const Post = () => {
  const [post, setPost] = useState<PostsData | null>(null);
  const { id } = useParams<PostParams>();

  useEffect(() => {
    const getPost = async () => {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const data = await response.json();
      setPost(data);
    };
    getPost();
  }, [id]);
  console.log(post);
  return (
    <div className="post-container">
      <h1>Détails de la publication</h1>
      <div className="post">
        <h3>Publication numéro: {post?.id}</h3>
        <h2>Titre: {post?.title}</h2>
        <p>{post?.body}</p>
        <Link to={"/"}>Retourner à la page d'accueil</Link>
      </div>
    </div>
  );
};

export default Post;
