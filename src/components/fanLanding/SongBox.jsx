"use client";
import { NextIcon, PreviousIcon } from "@/app/assets/icons";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { BsPauseFill } from "react-icons/bs";
import { HiPlay } from "react-icons/hi2";
import Button from "../shared/Button";

const SongBox = ({ song }) => {
  const [currentSong, setCurrentSong] = useState(song.songs[0]);
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
    const currentIndex = song.songs.findIndex((s) => s.id === currentSong.id);
    const nextIndex = (currentIndex + 1) % song.songs.length;
    setCurrentSong(song.songs[nextIndex]);
    setCurrentTime(0);
    setIsPlaying(true);
  };

  const handlePreviousSong = () => {
    const currentIndex = song.songs.findIndex((s) => s.id === currentSong.id);
    const prevIndex =
      currentIndex === 0 ? song.songs.length - 1 : currentIndex - 1;
    setCurrentSong(song.songs[prevIndex]);
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
    <div className="p-[35px] lg:px-[73px] bg-black rounded-[20px]">
      {/* Album cover */}
      <AlbumCover data={song} />
      <div className="mt-5 lg:mt-10  border-y border-primary">
        {song?.songs?.map((song, index) => (
          <div
            key={song.id}
            className={`flex justify-between items-center py-[10px] cursor-pointer ${
              index !== song?.songs?.length - 1 ? "border-b border-white" : ""
            }`}
            onClick={() => handleSongChange(song)}
          >
            <span className="text-white text-[10px] md:text-base font-noka font-medium ">
              {index + 1}. {song.title}
            </span>
            <div className="flex items-center gap-[10px]">
              <span className="text-white text-[10px] md:text-base font-bold font-noka">
                {formatTime(duration)}
              </span>
              {isPlaying && currentSong.id === song.id ? (
                <BsPauseFill color="#fff" size={20} />
              ) : (
                <HiPlay color="#fff" size={20} />
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-5 lg:mt-10 flex justify-center lg:justify-start items-center gap-5">
        <Button
          text="Start Earning Today"
          // img="/images/default/buy-now-border.png"
        />
        <div className="flex items-center max-w-[118px]">
          {song?.companyImages.slice(0, 5).map((item, index) => (
            <div
              className="size-[30px] p-1 rounded-full shadow-songShadow -ml-2 grid place-items-center bg-white"
              key={index}
            >
              <Image
                src={item}
                width={20}
                height={20}
                alt="image"
                className="size-full rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="mt-[40px] p-5 bg-white rounded-[10px] hidden lg:block">
        <div className="flex items-center gap-[5px]">
          <img
            src={song.albumImg}
            alt="Song Playing"
            className="w-12 h-12 rounded-lg"
          />
          <div>
            <h3 className="text-lg font-bold text-textColor font-noka">
              {currentSong.title}
            </h3>
            <p className="text-xs font-medium text-textColor font-noka">
              Gus Dapperton Fr. Electric Guest
            </p>
          </div>
        </div>
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
    </div>
  );
};

export default SongBox;

const AlbumCover = ({ data }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center gap-4 min-h-[160px] max-h-full">
      <Image
        src={data?.albumImg}
        width={159}
        height={159}
        alt="album image"
        className="w-full sm:w-[159px] h-auto"
      />
      <div>
        <p className="text-white text-xs font-medium font-noka">EP</p>
        <h6 className="text-xl md:text-[40px] font-bold font-noka text-white mt-[6px] leading-none">
          {data.albumName}
        </h6>
        <div className="flex items-center gap-[7px] mt-3">
          <Image
            src={data.singerImg}
            width={55}
            height={55}
            alt="image"
            className="size-[55px] object-cover rounded-full"
          />
          <div>
            <h6 className="text-white text-xs font-bold font-noka">
              {data.singerName}
            </h6>
            <p className="my-[5px] text-white text-xs font-noka">
              {data.songs.length} Songs - {data.duration}
            </p>
            <p className="my-[5px] text-white text-xs font-light font-noka">
              7 June 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
