import {useEffect, useState} from 'react';
import {Text, View} from 'react-native';

import TrackPlayer, {
  Event,
  State,
  Track,
  useTrackPlayerEvents,
} from 'react-native-track-player';

import {styles} from '../../screens/AudioScreen/styles.ts';

const Header = () => {
  const [info, setInfo] = useState<Track | undefined>(undefined);
  useEffect(() => {
    setTrackInfo();
  }, []);

  useTrackPlayerEvents([Event.PlaybackTrackChanged], event => {
    //@ts-ignore
    if (event.state === State.nextTrack) {
      setTrackInfo();
    }
  });

  async function setTrackInfo() {
    const track = await TrackPlayer.getCurrentTrack();
    if (track != null) {
      const newInfo = await TrackPlayer.getTrack(track);
      setInfo(newInfo);
    }
  }

  return (
    <View>
      <Text style={styles.songTitle}>{info?.title}</Text>
      <Text style={styles.artistName}>{info?.artist}</Text>
    </View>
  );
};

export default Header;
