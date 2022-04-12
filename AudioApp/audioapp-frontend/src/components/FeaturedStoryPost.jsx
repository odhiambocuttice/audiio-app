import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../components/style.css";

export const FeaturedStoryPost = () => {
  const [featurePosts, setFeaturedPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/story-posts/featured`
        );
        setFeaturedPosts(res.data[0]);
        // console.log(res.data);
      } catch (err) {}
    };

    fetchData();
  }, []);
  console.log(featurePosts);

  // const createBlog = () => {
  //   return <div>{featurePosts.story_content}</div>;
  // };

  return (
    <div className="jumbotron text-dark rounded bg-light bg-gradient d-flex mb-5  jumbotron_style">
      <div className="col-auto d-none d-lg-block ">
        <img
          className="rounded"
          width="400"
          height="350"
          src={featurePosts.story_image}
          alt="thumbnail"
        />
      </div>
      <div className="featuted-post" style={{ marginLeft: "90px" }}>
        <h1 className="display-4 font-italic">{featurePosts.title}</h1>
        <p
          className="my-3 story_content fs-1 "
          dangerouslySetInnerHTML={{ __html: featurePosts.story_content }}
          dangerouslySetAttributes={{ style: "color:red" }}
          style={{ fontWeight: 800 }}
        />
        <p className="lead m-6">
          <Link
            to={`/story-posts/${featurePosts.slug}`}
            className="text-decoration-none "
            style={{ fontSize: 20, color: "rebeccapurple" }}
          >
            continue reading
          </Link>
        </p>
        {/* <p className="lead">
          <Link
            className="btn btn-primary btn-lg"
            to="/story-posts"
            role="button"
          >
            more stories
          </Link>
        </p> */}
      </div>
    </div>
  );
};
