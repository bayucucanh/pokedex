import React, {useRef} from 'react';
import {pokemonColors} from '../../constant/pokemonColors';
import {Pokemon} from '../HomeScreen/types';
import {useDispatch, useSelector} from 'react-redux';
import {Alert, Animated, PanResponder} from 'react-native';
import {addPokemonToMyList} from '../../redux/slices/pokemonSlice';

export const useDetail = ({item}: {item: Pokemon}) => {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state: any) => state.pokemon.myPokemons);

  const isPokemonAlreadyCaught = myPokemons.some(
    (p: any) => p.name === item.name,
  );
  const pokemonColor = pokemonColors[item.type];

  const pan = useRef(new Animated.Value(0)).current;

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: (_, gestureState) => {
        if (gestureState.dy < 0) {
          Animated.timing(pan, {
            toValue: gestureState.dy,
            duration: 0,
            useNativeDriver: false,
          }).start();
        }
      },
      onPanResponderRelease: (_, gestureState) => {
        if (gestureState.dy < -50) {
          console.log('Swiped Up');
          const isCatchSuccessful = Math.random() > 0.5;

          if (isCatchSuccessful) {
            dispatch(addPokemonToMyList(item));
            Alert.alert('Success', `${item.name} was caught!`);
          } else {
            Alert.alert('Failed', `${item.name} escaped!`);
          }
        }
        Animated.spring(pan, {
          toValue: 0,
          useNativeDriver: false,
        }).start();
      },
    }),
  ).current;
  return {
    isPokemonAlreadyCaught,
    pokemonColor,
    pan,
    panResponder,
    item,
  };
};
