import React, { useEffect, useState } from "react";
import { Box, Flex, Text } from "@radix-ui/themes";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import "./AudioPlayer.css";
import moment from "moment";

import {
  PauseIcon,
  PlayIcon,
  TrackNextIcon,
  TrackPreviousIcon,
} from "@radix-ui/react-icons";

export default () => {
  const [tracks, setTracks] = useState([]);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);

  const handleClickNext = () => {
    setCurrentTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const handleClickPrev = () => {
    setCurrentTrackIndex((currentTrack) =>
      currentTrack > 0 ? currentTrack - 1 : tracks.length - 1
    );
  };

  const handleEnd = () => {
    setCurrentTrackIndex((currentTrack) =>
      currentTrack < tracks.length - 1 ? currentTrack + 1 : 0
    );
  };

  const header = () => {
    if (
      tracks[currentTrackIndex] &&
      tracks[currentTrackIndex].title &&
      tracks[currentTrackIndex].createdAt
    ) {
      return (
        <Flex justify="between" align="center" wrap="wrap">
          <Text className="TrackTitle">{tracks[currentTrackIndex].title}</Text>
          <Text className="TrackDate">
            {moment(tracks[currentTrackIndex].createdAt).format("MMMM D, YYYY")}
          </Text>
        </Flex>
      );
    } else return null;
  };

  useEffect(() => {
    fetch("/audio/manifest.json")
      .then((res) => res.json())
      .then(async (items) => {
        setTracks(items);
      })
      .catch(console.error);
  }, []);

  return (
    <Box my="6">
      <AudioPlayer
        className="DreamStoriesAudioPlayer"
        layout="stacked"
        header={<div>{header()}</div>}
        customIcons={{
          play: <PlayIcon width={28} height={28} />,
          pause: <PauseIcon width={28} height={28} />,
          next: <TrackNextIcon width={24} height={24} />,
          previous: <TrackPreviousIcon width={24} height={24} />,
        }}
        customAdditionalControls={[]}
        showJumpControls={false}
        showSkipControls={true}
        autoPlay={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        onEnded={handleEnd}
        src={tracks[currentTrackIndex] ? tracks[currentTrackIndex].src : null}
      />
      <Box className="DreamStoriesTrackContainer" my="4">
        {tracks.map((track, index) => (
          <Flex
            className={
              index === currentTrackIndex
                ? "DreamStoriesTrackItem Active"
                : "DreamStoriesTrackItem"
            }
            onClick={() => setCurrentTrackIndex(index)}
            justify="between"
          >
            <Box className="DreamStoriesTrackTitle">{track.title}</Box>
            <Box className="DreamStoriesTrackDate">
              {moment(track.createdAt).format("MMMM D, YYYY")}
            </Box>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};
