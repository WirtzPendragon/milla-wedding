"use client";

import { useRef, useState } from "react";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  function toggleMusic() {
    if (!audioRef.current) return;

    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setPlaying(!playing);
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">

      <audio ref={audioRef} loop>
        <source src="../../public/music/wedding.mp3" type="audio/mpeg" />
      </audio>

      <button
        onClick={toggleMusic}
        className="bg-[#870D24] text-white w-12 h-12 rounded-full shadow-lg"
      >
        {playing ? "❚❚" : "▶"}
      </button>

    </div>
  );
}