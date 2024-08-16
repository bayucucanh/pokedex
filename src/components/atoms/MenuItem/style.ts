import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    height: 130,
    marginVertical: 20,
    justifyContent: 'center',
    //   alignItems: 'center',

    position: 'relative',
  },
  image: {
    width: 170,
    height: '110%',
    position: 'absolute',
    zIndex: -1,
    right: -30,
    top: -30,
  },
});
