import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  songTitle: {
    fontSize: 16,
    marginTop: 50,
    color: 'black',
    textAlign: 'center',
  },
  artistName: {
    marginTop: 8,
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  controlContainer: {flex: 1, flexDirection: 'column'},
  download: {width: '100%', alignItems: 'center', justifyContent: 'center'},
  controls: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
