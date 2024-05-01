import {memo} from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Track} from 'react-native-track-player';

type PlayListItemProps = {
  item: Track;
  handleItemPress: (item: Track, index: number) => Promise<void>;
  title: string | undefined;
  isCurrent: boolean;
  index: number;
};

const PlayListItem = ({
  item,
  handleItemPress,
  title,
  isCurrent,
  index,
}: PlayListItemProps) => (
  <TouchableOpacity onPress={() => handleItemPress(item, index)}>
    <Text
      style={{
        ...styles.playlistItem,
        ...{backgroundColor: isCurrent ? '#666' : 'transparent'},
      }}>
      {title}
    </Text>
  </TouchableOpacity>
);

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

export default memo(PlayListItem);
