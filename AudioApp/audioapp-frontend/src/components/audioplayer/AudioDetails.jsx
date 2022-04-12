import React, { useEffect } from "react";
import "../style.css";

export const AudioDetails = ({ activeColor, trackIndex, isPlaying }) => {
  useEffect(() => {
    document.documentElement.style.setProperty("--active-color", activeColor);
  }, [trackIndex, activeColor]);

  return <div className={`color-backdrop ${isPlaying ? "playing" : "idle"}`} />;
};
