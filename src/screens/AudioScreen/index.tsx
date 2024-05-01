import {useEffect, useState} from 'react';
import {ActivityIndicator, SafeAreaView} from 'react-native';

import {Controls, Header, Playlist} from '@components';
import {handleQueryError} from '@features';
import BottomSheet from '@gorhom/bottom-sheet';
import {UseGetAllQuery, UseQueue} from '@hooks';
import {UseBottomSheet} from 'context/bottomSheetContext.tsx';
import {DownloadDirectoryPath} from 'react-native-fs';
import {addTrack, setupPlayer} from 'services/music/musicController.ts';

import {styles} from './styles.ts';

const AudioScreen = () => {
  const {data, error, isLoading} = UseGetAllQuery();

  const {sheetRef, snapPoints} = UseBottomSheet();

  const [didSetup, setDidSetup] = useState(false);
  const [track, setTrack] = useState<{url: string; title: string | undefined}>({
    url: '',
    title: '',
  });

  const {currentTrack, queue} = UseQueue(didSetup);

  useEffect(() => {
    if (data) {
      const setup = async () => {
        let isSetup = await setupPlayer();
        await addTrack(data?.audio);
        setDidSetup(isSetup);
      };
      setup();
    }
  }, [data]);

  if (!didSetup && isLoading) {
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
