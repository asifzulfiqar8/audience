"use client";
import { NextIcon, PreviousIcon } from "@/app/assets/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsPauseFill } from "react-icons/bs";
import { HiPlay } from "react-icons/hi2";

const songs = [
  {
    id: 1,
    title: "Lil Tune Ft. Electric Guest",
    src: "/songs/lil-tune.mp3",
  },
  {
    id: 2,
    title: "What You Won’t Do For Love",
    src: "/songs/lil-tune.mp3",
  },
  { id: 3, title: "Believe", src: "/songs/lil-tune.mp3" },
  { id: 4, title: "Everything She Wants", src: "/songs/lil-tune.mp3" },
];

const PlayBar = () => {
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef(null);
  const progressBarRef = useRef(null);

  useEffect(() => {
    if (currentSong) {
      audioRef.current = new Audio(currentSong.src);
    }

    const updateTime = () => setCurrentTime(audioRef.current.currentTime);
    const setAudioDuration = () => setDuration(audioRef.current.duration);
    const handleSongEnd = () => {
      setIsPlaying(false);
      setCurrentTime(0);
    };

    audioRef.current.addEventListener("timeupdate", updateTime);
    audioRef.current.addEventListener("loadedmetadata", setAudioDuration);
    audioRef.current.addEventListener("ended", handleSongEnd);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateTime);
      audioRef.current.removeEventListener("loadedmetadata", setAudioDuration);
      audioRef.current.removeEventListener("ended", handleSongEnd);
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    audio.src = currentSong.src;
    audio.load();

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      if (isPlaying) audio.play();
    };

    audio.addEventListener("loadedmetadata", handleLoadedMetadata);

    return () => {
      audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  }, [currentSong]);

  const handlePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleSongChange = (song) => {
    if (currentSong.id !== song.id) {
      setCurrentSong(song);
      setCurrentTime(0);
      setIsPlaying(true);
    } else {
      handlePlayPause();
    }
  };

  const handleNextSong = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % songs.length;
    setCurrentSong(songs[nextIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    const currentIndex = songs.findIndex((s) => s.id === currentSong.id);
    const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
    setCurrentSong(songs[prevIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const formatTime = (time) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const handleSeek = (e) => {
    if (!progressBarRef.current || !duration) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };
  return (
    <div className="bg-white p-5 lg:py-5 lg:px-10 rounded-[10px] flex flex-col md:flex-row items-center justify-between gap-5 lg:gap-6">
      <div className="flex items-center gap-[5px]">
        <Image
          src="/images/home/song-image-1.png"
          width={60}
          height={60}
          alt="album"
        />
        <div>
          <h6 className="text-xl lg:text-2xl text-textColor font-bold font-noka !leading-none">
            Believe
          </h6>
          <p className="text-xs lg:text-sm text-textColor font-medium font-noka">
            Gus Dapperton
          </p>
        </div>
      </div>
      {/* Play music */}
      <div className="flex-1 w-full">
        {/* Controls */}
        <div className="mt-5 flex justify-center items-center gap-1">
          <button onClick={handlePreviousSong}>
            <PreviousIcon />
          </button>
          <button onClick={handlePlayPause}>
            {isPlaying ? <BsPauseFill size={24} /> : <HiPlay size={24} />}
          </button>
          <button onClick={handleNextSong}>
            <NextIcon />
          </button>
        </div>
        {/* Playbar */}
        <div className="mt-2 flex items-center justify-between">
          <span className="text-[8px] font-light font-noka text-textColor">
            {formatTime(currentTime)}
          </span>
          <div
            ref={progressBarRef}
            className="w-full h-[3px] bg-gray-300 mx-2 rounded-full relative cursor-pointer"
            onClick={handleSeek}
          >
            <div
              className="h-[3px] bg-[#00071D] absolute rounded-full"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></div>
          </div>
          <span className="text-[8px] font-light font-noka text-textColor">
            {formatTime(duration)}
          </span>
        </div>
      </div>
      {/* Coming next */}
      <div className="hidden lg:flex items-center gap-[5px] opacity-60">
        <Image
          src="/images/home/song-image-1.png"
          width={60}
          height={60}
          alt="album"
        />
        <div>
          <h6 className="text-xl lg:text-2xl text-textColor font-bold font-noka !leading-none">
            Believe
          </h6>
          <p className="text-xs lg:text-sm text-textColor font-medium font-noka">
            Gus Dapperton
          </p>
          <p className="text-[10px] text-textColor font-medium font-noka">
            Gus Dapperton
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayBar;
