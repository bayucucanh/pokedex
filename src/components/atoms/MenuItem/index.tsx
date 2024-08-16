import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import typography from '../../../constant/typography';
import {Character, charizard} from '../../../assets/images';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';

const MenuItem = ({isPokemons = false}: {isPokemons: boolean}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate(isPokemons ? 'HomeScreen' : 'MyPokemonScreen')
      }
      style={[
        styles.container,
        {backgroundColor: !isPokemons ? '#A2DDF4' : '#FFB444'},
      ]}>
      <Text style={[typography.heading2Bold, {marginLeft: 22}]}>
        {isPokemons ? `Pokemon's` : 'Pokebag'}
      </Text>
      <Text style={[typography.bodyMedium, {marginLeft: 22}]}>
        {isPokemons ? `List of pokemon's` : 'List of your pokemons'}
      </Text>
      <Image
        source={isPokemons ? charizard : Character}
        style={styles.image}
        resizeMode="contain"
      />
    </TouchableOpacity>
  );
};

export default MenuItem;
