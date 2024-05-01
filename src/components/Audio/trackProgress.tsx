import {StyleSheet, Text, View} from 'react-native';

import {useProgress} from 'react-native-track-player';

const TrackProgress = () => {
  const {position, duration} = useProgress(200);

  const format = (seconds: number) => {
    let mins = parseInt(String(seconds / 60), 10)
      .toString()
      .padStart(2, '0');
    let secs = (Math.trunc(seconds) % 60).toString().padStart(2, '0');
    return `${mins}:${secs}`;
  };

  return (
    <View>
      <Text style={styles.trackProgress}>
        {format(position)} / {format(duration)}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  trackProgress: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
  },
});

export default TrackProgress;
