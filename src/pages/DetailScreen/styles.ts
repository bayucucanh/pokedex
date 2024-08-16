import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  swipeContainer: {
    width: 50,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 8,
    alignSelf: 'center',
    marginTop: 50,
  },
  pokeball: {
    width: 50,
    height: 50,
  },
  arrowsContainer: {
    alignItems: 'center',
  },
  arrow: {
    fontSize: 24,
    color: 'black',
  },
  label: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
  imagePokemon: {
    width: '80%',
    height: 250,
    alignSelf: 'center',
    marginTop: 50,
  },
  typeWrapper: {
    alignSelf: 'center',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 100,
    marginTop: 10,
    borderWidth: 1,
  },
  descPokemon: {textAlign: 'center', lineHeight: 20, marginTop: 20},
  pokemonName: {textAlign: 'center', marginTop: 20},
});
