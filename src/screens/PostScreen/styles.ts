import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {flex: 1},
  error: {color: 'red'},
  renderItem: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',
    borderColor: 'black',
    paddingVertical: 12,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 30,
  },
  title: {fontSize: 24, color: 'white', textAlign: 'center'},
  text: {color: 'black', textAlign: 'center'},
});
