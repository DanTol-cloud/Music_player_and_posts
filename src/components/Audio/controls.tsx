import {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

import {exists} from 'react-native-fs';
import TrackPlayer, {State, Track} from 'react-native-track-player';

import TrackProgress from './trackProgress.tsx';
import DownloadedSVG from '../../assets/svg/DownloadSVG.tsx';
import NextSVG from '../../assets/svg/NextSVG.tsx';
import PauseSVG from '../../assets/svg/PauseSVG.tsx';
import PrevSVG from '../../assets/svg/PrevSVG.tsx';
import ResumeSVG from '../../assets/svg/ResumeSVG.tsx';
import downloadTrack from '../../features/downloadTrack.tsx';
import {styles} from '../../screens/AudioScreen/styles.ts';

type ControlsType = {
  track: Track;
  path: string;
};

const Controls = ({track, path}: ControlsType) => {
  const [isPlay, setIsPlay] = useState(false);
  const [isExist, setIsExist] = useState(false);

  useEffect(() => {
    const checkFileExistence = async () => {
      try {
        const exist = await exists(path);
        setIsExist(exist);
      } catch (err) {
        console.error('Помилка перевірки існування файлу:', err);
      }
    };

    checkFileExistence();
  }, [path, isExist]);

  async function handlePlayPress() {
    if ((await TrackPlayer.getState()) === State.Playing) {
      setIsPlay(false);
      TrackPlayer.pause();
    } else {
      setIsPlay(true);
      TrackPlayer.play();
    }
  }

  return (
    <View style={styles.controlContainer}>
      {!isExist ? (
        <View style={styles.download}>
          <TouchableOpacity
            onPress={() =>
              downloadTrack({
                url: track.url,
                title: track.title,
                setIsExist,
                setIsPlay,
              })
            }>
            <DownloadedSVG />
          </TouchableOpacity>
        </View>
      ) : (
        <>
          <TrackProgress />
          <View style={styles.controls}>
            <TouchableOpacity onPress={() => TrackPlayer.skipToPrevious()}>
              <Text>
                <PrevSVG />
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePlayPress}>
              {isPlay ? <PauseSVG /> : <ResumeSVG />}
            </TouchableOpacity>
            <TouchableOpacity onPress={() => TrackPlayer.skipToNext()}>
              <Text>
                <NextSVG />
              </Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

export default Controls;
