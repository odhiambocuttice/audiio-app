import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Play } from "../../assets/icons/play.svg";
import { ReactComponent as Pause } from "../../assets/icons/pause.svg";
import { ReactComponent as Prev } from "../../assets/icons/prev.svg";
import { ReactComponent as Next } from "../../assets/icons/next.svg";

export const PlayPauseButton = ({
  setIsPlaying,
  isPlaying,
  onPrevClick,
  onNextClick,
}) => {
  return (
    <div className="audio-controls">
      <button
        type="button"
        className="prev"
        aria-label="Previous"
        onClick={onPrevClick}
      >
        <Prev />
      </button>

      {isPlaying ? (
        <button
          type="button"
          className="pause"
          onClick={() => setIsPlaying(false)}
          aria-label="Pause"
        >
          <Pause />
        </button>
      ) : (
        <button
          type="button"
          className="play"
          onClick={() => setIsPlaying(true)}
          aria-label="Play"
        >
          <Play />
        </button>
      )}

      <button
        type="button"
        className="next"
        aria-label="Next"
        onClick={onNextClick}
      >
        <Next />
      </button>
    </div>
  );
};
