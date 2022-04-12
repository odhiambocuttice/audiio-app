import imgSrc from "./assets/artwork/artwork.jpeg";
import imgSrc2 from "./assets/artwork/artwork.jpeg";
import imgSrc3 from "./assets/artwork/artwork.jpeg";
import imgSrc4 from "./assets/artwork/artwork.jpeg";
import hooligan from "./assets/music/Baby Keem - hooligan.mp3";
import hotline from "./assets/music/Drake - Hotline Bling.mp3";
import myself from "./assets/music/NAV - Myself.mp3";
import turks from "./assets/music/NAV ft. Travis Scott - Turks.mp3";

export const tracks = [
  {
    title: "Hooligan",
    artist: "Baby Keem",
    audioSrc: hooligan,
    image: imgSrc,
    color: "#00aeb0",
  },
  {
    title: "HotLine Bling",
    artist: "Drake",
    image: imgSrc2,
    audioSrc: hotline,
    color: "#ffb77a",
  },
  {
    title: "Myself",
    artist: "Nav",
    image: imgSrc3,
    audioSrc: myself,
    color: "#5f9fff",
  },
  {
    title: "Turks",
    artist: "Nav ft Travis Scott",
    image: imgSrc4,
    audioSrc: turks,
    color: "#5e28ff",
  },
];
