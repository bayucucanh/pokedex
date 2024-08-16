import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  imageBackground: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: -1,
    top: 0,
    left: -20,
  },
  flexTitle: {flexDirection: 'row', alignItems: 'center', marginBottom: 32},
  pokeball: {width: 20, height: 20, marginLeft: 8},
});
