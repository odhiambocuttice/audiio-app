import React, { useRef, useState, useEffect } from "react";
import "../style.css";
import { AudioDetails } from "./AudioDetails";
import { PlayPauseButton } from "./PlayPauseButton";

export const AudioPlayer = (props) => {
  // const audioElement = useRef(null);

  // State
  const [trackIndex, setTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [trackProgress, setTrackProgress] = useState(0);
  const [volume, setVolume] = useState(50);

  // Destructure for conciseness
  const { title, artist, color, image, audioSrc } = props.tracks[trackIndex];

  // Refs
  const audioRef = useRef(new Audio(audioSrc));
  const intervalRef = useRef();
  const isReady = useRef(false);

  // Destructure for conciseness
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : "0%";
  const trackStyling = `
     -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #02484a), color-stop(${currentPercentage}, #FAF0CB))
   `;

  const startTimer = () => {
    // Clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        toNextTrack();
      } else {
        setTrackProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };

  const onVol = (value) => {
    // Clear any timers already running
    audioRef.current.volume = value;
    setVolume(audioRef.current.volume);
  };

  const toPrevTrack = () => {
    if (trackIndex - 1 < 0) {
      setTrackIndex(props.tracks.length - 1);
    } else {
      setTrackIndex(trackIndex - 1);
    }
  };

  const toNextTrack = () => {
    if (trackIndex < props.tracks.length - 1) {
      setTrackIndex(trackIndex + 1);
    } else {
      setTrackIndex(0);
    }
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  });

  // Handles cleanup and setup when changing tracks
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      // Set the isReady ref as true for the next pass
      isReady.current = true;
    }
  }, []);

  useEffect(() => {
    // Pause and clean up on unmount
    return () => {
      audioRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <>
      <div className="audio-player">
        <div className="track-info">
          <img
            className="artwork"
            src={image}
            alt={`track artwork for ${title} by ${artist}`}
          />

          <h2 className="title">{title}</h2>
          <h3 className="artist">{artist}</h3>
          <PlayPauseButton
            isPlaying={isPlaying}
            onPrevClick={toPrevTrack}
            onNextClick={toNextTrack}
            setIsPlaying={setIsPlaying}
          />

          <input
            type="range"
            min={0}
            max={1}
            step={0.02}
            value={volume}
            onChange={(e) => {
              onVol(e.target.valueAsNumber);
            }}
            className="input"
            style={{ background: trackStyling }}
          />
        </div>

        <AudioDetails
          trackIndex={trackIndex}
          activeColor={color}
          isPlaying={isPlaying}
        />
      </div>
    </>
  );
};
