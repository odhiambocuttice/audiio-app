import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../components/style.css";

export const SingleStoryPost = (props) => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const slug = props.match.params.id;

    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/story-posts/${slug}`
        );
        setBlog(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [props.match.params.id]);

  const createBlog = () => {
    return { __html: blog.story_content };
  };

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };
  // console.log(blog);
  return (
    <div className="container mt-3">
      <h1 className="display-2  m-3">{blog.title}</h1>
      <div className="d-flex">
        <p className="text-muted m-3 font-weight-light">
          Written by: {blog.author}
        </p>
        <p className="text-muted m-3 font-weight-light">
          Updated at: {blog.date_created}
        </p>
      </div>
      <span className="text-muted m-3">
        Category: {capitalizeFirstLetter(blog.category)}
      </span>

      <div className="display-4">
        <img
          className="rounded"
          // width="700"
          height="500"
          src={blog.story_image}
          alt="thumbnail"
        />
      </div>
      <div className="mt-5 mb-5" dangerouslySetInnerHTML={createBlog()} />

      <hr />
      <button className="mb-5 btn btn-outline-info">
        <Link
          to="/story-posts"
          className="font-weight-bold text-decoration-none"
        >
          Back to Stories
        </Link>
      </button>
    </div>
  );
};
