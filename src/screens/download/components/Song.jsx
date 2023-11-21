
import React, { useState } from "react";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { MdDownloadForOffline } from "react-icons/md";
import AudioPlayer from "react-h5-audio-player";

function Song({ downloadsData }) {
  const [currentSongIndex, setCurrentSongIndex] = useState(null);

  const handlePlay = (index) => {
    setCurrentSongIndex(index);
  };

  return (
    <div>
      {downloadsData.map((downloadPage) => (
        <div key={downloadPage.id}>
          {downloadPage.song.map((song, index) => (
            <div key={song.id} className="w-full h-24 flex justify-between items-center px-2 md:px-10">
              <div className="flex">
                {/* Your image code here */}
                <div className="mx-1 md:mx-5">
                  <p className="text-base md:text-xl font-semibold text-secondary">
                    {song.name}
                  </p>
                  
                  <p className="text-base md:text-lg text-footerPrimaryColor">
                    {song.godName}
                  </p>
                  <p className="text-sm text-footerPrimaryColor">{song.time}</p>
                </div>
              </div>
              <div className="flex gap-5">
                <BsFillPlayCircleFill className="text-2xl text-secondary" />
                <MdDownloadForOffline className="text-2xl text-secondary" />
              </div>
              {/* <AudioPlayer
                autoPlay={currentSongIndex === index}
                showSkipControls
                showFilledVolume
                autoPlayAfterSrcChange
                src={song.url || ''}
                onPlay={(e) => handlePlay(index)}
                className="rounded-xl w-96"
              /> */}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Song;
