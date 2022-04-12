// import alex from "../../assets/showsPosters/alex.jpg";
import "./singleshow.css";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import ArrowForwardIosRoundedIcon from "@material-ui/icons/ArrowForwardIosRounded";
import ArrowBackIosRoundedIcon from "@material-ui/icons/ArrowBackIosRounded";

export const SingleShow = () => {
  const [showPosters, setShowPosters] = useState([]);
  const [isShowArrow, setIsShowArrow] = useState(0);
  const [postSlideNo, setPostSlideNo] = useState(0);

  const showRef = useRef();

  useEffect(() => {
    const config = {
      headers: { Accept: "application/json" },
    };

    const fetchShowPoster = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/radio-shows/show-poster`,
          config
        );
        setShowPosters(response.data);
      } catch (error) {}
    };
    fetchShowPoster();
  }, []);

  const arrowClick = (direction) => {
    setIsShowArrow(true);
    let dist = showRef.current.getBoundingClientRect();
    console.log(dist);
    const distance = showRef.current.getBoundingClientRect().x - 10;
    if (direction === "arrow-left" && postSlideNo > 0) {
      setPostSlideNo(postSlideNo - 1);
      showRef.current.style.transform = `translateX(${470 + distance}px)`;
    }
    if (direction === "arrow-right" && postSlideNo < 2) {
      setPostSlideNo(postSlideNo + 1);
      showRef.current.style.transform = `translateX(${-470 + distance}px)`;
    }
  };

  const getstoryPosts = () => {
    let list = [];

    showPosters.map((showPoster) => {
      return list.push(
        <div className="position-relative">
          <div className="text-center">
            <strong className="text-lowercase">
              {showPoster.poster_title}
            </strong>
            <div className="showinfo">
              <p className="showdesc">{showPoster.show_description}</p>
            </div>
          </div>

          <img
            className="poster-image"
            src={showPoster.show_poster}
            alt={showPoster.poster_title}
          />
        </div>
      );
    });

    return list;
  };

  return (
    <div className="list" id="radioshows">
      <p className="display-4 radioshows">radio shows</p>
      <div className="wrapper">
        <ArrowBackIosRoundedIcon
          className="arrow-left"
          style={{ display: !isShowArrow && "none" }}
          onClick={() => {
            arrowClick("arrow-left");
          }}
        />
        <div className="singleshows" ref={showRef}>
          {getstoryPosts()}
        </div>
        <ArrowForwardIosRoundedIcon
          className="arrow-right"
          onClick={() => {
            arrowClick("arrow-right");
          }}
        />
      </div>
    </div>
  );
};
