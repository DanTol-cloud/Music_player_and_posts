import {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';

import BottomSheet from '@gorhom/bottom-sheet';
import {DownloadDirectoryPath} from 'react-native-fs';
import TrackPlayer, {
  Event,
  State,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import {styles} from './styles.ts';
import Controls from '../../components/Audio/controls.tsx';
import Header from '../../components/Audio/header.tsx';
import Playlist from '../../components/Audio/playlist.tsx';
import {useBottomSheet} from '../../context/bottomSheetContext.tsx';
import handleQueryError from '../../features/handleQueryError.tsx';
import {useGetAllQuery} from '../../hooks/hooks.ts';
import {addTrack, setupPlayer} from '../../services/musicController.ts';

const AudioScreen = () => {
  const [queue, setQueue] = useState<Track[]>([]);
  const [currentTrack, setCurrentTrack] = useState<number | null>(0);
  const [play, setPlay] = useState(false);
  const [track, setTrack] = useState<{url: string; title: string | undefined}>({
    url: '',
    title: '',
  });

  const {data, error, isLoading} = useGetAllQuery();

  const {sheetRef, snapPoints} = useBottomSheet();

  useEffect(() => {
    if (data) {
      const loadPlaylist = async () => {
        const newQueue = await TrackPlayer.getQueue();
        setQueue(newQueue);
      };

      const setup = async () => {
        let isSetup = await setupPlayer();
        await addTrack(data?.audio);
        setPlay(isSetup);
      };
      setup().then(() => {
        loadPlaylist();
      });
    }
  }, [data]);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], async event => {
    //@ts-ignore
    if (event.state === State.nextTrack) {
      let index = await TrackPlayer.getCurrentTrack();
      setCurrentTrack(index);
    }
  });

  if (!play && isLoading) {
    return <ActivityIndicator />;
  }

  if (error) {
    handleQueryError({error});
  }

  return (
    <SafeAreaView style={styles.container}>
      <Playlist queue={queue} currentTrack={currentTrack} setTrack={setTrack} />
      <BottomSheet enablePanDownToClose ref={sheetRef} snapPoints={snapPoints}>
        <Header />
        <Controls
          track={track}
          path={`${DownloadDirectoryPath}/${track.title?.slice(0, 10)}.mp3`}
        />
      </BottomSheet>
    </SafeAreaView>
  );
};

export default AudioScreen;
