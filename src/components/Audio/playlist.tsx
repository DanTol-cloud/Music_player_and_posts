import {Dispatch, SetStateAction, useCallback} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import {UseLayout} from '@hooks';
import {UseBottomSheet} from 'context/bottomSheetContext.tsx';
import TrackPlayer, {Track} from 'react-native-track-player';

import PlayListItem from './playListItem.tsx';

type PlaylistType = {
  queue: Track[];
  currentTrack: number | null;
  setTrack: Dispatch<SetStateAction<{url: string; title: string | undefined}>>;
};
const Playlist = ({queue, currentTrack, setTrack}: PlaylistType) => {
  const {handleSnapPress} = UseBottomSheet();

  const {getItemLayout} = UseLayout();

  const renderItem = useCallback(
    ({item, index}: {item: Track; index: number}) => {
      const handleItemPress = async () => {
        await TrackPlayer.skip(Number(index));
        setTrack({url: item.url, title: item.title});
        handleSnapPress(0);
      };

      return (
        <PlayListItem
          item={item}
          handleItemPress={handleItemPress}
          title={item.title}
          isCurrent={currentTrack === index}
          index={index}
        />
      );
    },
    [currentTrack, handleSnapPress, setTrack],
  );

  const keyExtractor = (item: Track) => item.id.toString();

  return (
    <View>
      <View style={styles.playlist}>
        <FlatList
          keyExtractor={keyExtractor}
          data={queue}
          getItemLayout={getItemLayout}
          renderItem={renderItem}
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
