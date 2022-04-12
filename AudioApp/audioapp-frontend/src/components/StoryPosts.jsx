import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./style.css";
import { FeaturedStoryPost } from "./FeaturedStoryPost";

export const StoryPosts = () => {
  const [storyPosts, setStoryPosts] = useState([]);

  useEffect(() => {
    const fetchstoryPosts = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/story-posts/`
        );
        setStoryPosts(res.data);
      } catch (err) {}
    };

    fetchstoryPosts();
  }, []);

  const capitalizeFirstLetter = (word) => {
    if (word) return word.charAt(0).toUpperCase() + word.slice(1);
    return "";
  };

  const getstoryPosts = () => {
    let list = [];
    let result = [];

    storyPosts.map((storyPost) => {
      return list.push(
        <div
          id="story-posts"
          className="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative m-1"
        >
          <div className="col p-4 d-flex flex-column position-static">
            <strong className="d-inline-block mb-2 text-primary">
              {capitalizeFirstLetter(storyPost.category)}
            </strong>

            <h3 className="mb-0">{storyPost.title}</h3>

            <p
              className="card-text mb-auto story_content"
              dangerouslySetInnerHTML={{ __html: storyPost.story_content }}
            />
            <Link
              to={`/story-posts/${storyPost.slug}`}
              // className="stretched-link"
            >
              Continue reading
            </Link>
          </div>
          <div className="col-auto d-none d-lg-block">
            <img
              width="200"
              height="250"
              src={storyPost.story_image}
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
      <div className="nav-scroller py-1 mb-2">
        <nav className="nav d-flex justify-content-center align-center ">
          <Link
            className="p-2 text-muted text-decoration-none"
            to="/category/music"
          >
            Music
          </Link>
          <Link
            className="p-2 text-muted text-decoration-none"
            to="/category/lifestyle"
          >
            lifestyle
          </Link>
        </nav>
      </div>

      <FeaturedStoryPost />

      {getstoryPosts()}
    </div>
  );
};
