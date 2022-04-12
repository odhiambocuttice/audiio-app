import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/style.css";

export const StoryCategory = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [currentCategory, setCurrentCategory] = useState("");

  useEffect(() => {
    const category = props.match.params.id;
    setCurrentCategory(capitalizeFirstLetter(category));

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const fetchData = async () => {
      try {
        const res = await axios.post(
          `${process.env.REACT_APP_API_URL}/api/story-posts/category`,
          { category },
          config
        );
        setBlogs(res.data);
      } catch (err) {}
    };

    fetchData();
  }, [props.match.params.id]);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };
  // console.log(blogs[1]);

  const getCategoryBlogs = () => {
    let list = [];
    let result = [];

    blogs.map((blogPost) => {
      return list.push(
        <div className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {capitalizeFirstLetter(blogPost.category)}
            </strong>
            <h3 className="mb-0">{blogPost.title}</h3>

            <p className="card-text mb-auto">{blogPost.punch_line}</p>
            <Link to={`/story-posts/${blogPost.slug}`}>Continue reading</Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={blogPost.story_image}
              alt="thumbnail"
            />
          </div>
        </div>
      );
    });

    for (let i = 0; i < list.length; i += 2) {
      result.push(
        <div key={i} className="row mb-2">
          <div className="col-md-6">{list[i]}</div>
          <div className="col-md-6">{list[i + 1] ? list[i + 1] : null}</div>
        </div>
      );
    }

    return result;
  };

  return (
    <div className="container mt-3">
      <h3 className="display-4">{currentCategory} Category</h3>
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-center align-center">
          <Link className="p-2 text-muted " to="/category/music">
            Music
          </Link>
          <Link className="p-2 text-muted" to="/category/lifestyle">
            Lifestyle
          </Link>
        </nav>
      </div>
      {getCategoryBlogs()}
    </div>
  );
};
