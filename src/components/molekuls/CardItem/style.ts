import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFB444',
    width: '100%',
    height: 150,
    borderRadius: 14,
    position: 'relative',
  },
  backgroundImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    zIndex: -1,
  },
  pokemon: {
    width: 200,
    height: '100%',
    position: 'absolute',
    zIndex: 1,
    right: 0,
    top: -30,
  },
  categoryWrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    padding: 2,
    width: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    marginTop: 8,
    zIndex: 2,
  },
});
