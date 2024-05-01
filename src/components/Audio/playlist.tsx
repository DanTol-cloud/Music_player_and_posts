import {Dispatch, SetStateAction} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import TrackPlayer, {Track} from 'react-native-track-player';

import PlayListItem from './playListItem.tsx';
import {useBottomSheet} from '../../context/bottomSheetContext.tsx';

type PlaylistType = {
  queue: Track[];
  currentTrack: number | null;
  setTrack: Dispatch<SetStateAction<{url: string; title: string | undefined}>>;
};
const Playlist = ({queue, currentTrack, setTrack}: PlaylistType) => {
  const {handleSnapPress} = useBottomSheet();

  const handleItemPress = async (item: Track, index: number) => {
    await TrackPlayer.skip(Number(index));
    setTrack({url: item.url, title: item.title});
    handleSnapPress(0);
  };

  return (
    <View>
      <View style={styles.playlist}>
        <FlatList
          data={queue}
          renderItem={({item, index}: {item: Track; index: number}) => (
            <PlayListItem
              item={item}
              handleItemPress={handleItemPress}
              title={item.title}
              isCurrent={currentTrack === index}
              index={index}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  playlist: {
    marginTop: 40,
    marginBottom: 40,
  },
  playlistItem: {
    color: 'black',
    fontSize: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 8,
    paddingRight: 8,
    borderRadius: 4,
  },
});

export default Playlist;
