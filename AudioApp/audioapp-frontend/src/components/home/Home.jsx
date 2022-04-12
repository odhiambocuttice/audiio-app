import { SingleShow } from "../singleshow/SingleShow";
import { FeaturedStoryPost } from "../FeaturedStoryPost";
import { About } from "../about/About";
import "./home.css";
import { AudioPlayer } from "../audioplayer/AudioPlayer";
import { tracks } from "../../tracks";

export const Home = () => {
  return (
    <div className="home" id="home">
      <div className="audio_player_style">
        <AudioPlayer tracks={tracks} />
      </div>

      <div className="featured_post_style" id="feature-story">
        <h1 className="display-4 mb-1 text-center featured-text">
          feature story
        </h1>
        <hr />
        <div className="">
          <FeaturedStoryPost />
        </div>
      </div>

      <div className="overflow-hidden">
        <SingleShow />
        <About />
      </div>
    </div>
  );
};
