import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {MenuItem, ResponsiveView} from '../../components';
import {Character, charizard, Pokeball} from '../../assets/images';
import typography from '../../constant/typography';
import {styles} from '../HomeScreen/styles';

const Menu = () => {
  return (
    <ResponsiveView>
      <Text style={[typography.heading1Bold, {marginTop: 32}]}>
        Hi, Charizard
      </Text>
      <Text style={[typography.bodyMedium, {marginBottom: 32}]}>
        Please select menu
      </Text>
      <MenuItem isPokemons />
      <MenuItem isPokemons={false} />
    </ResponsiveView>
  );
};

export default Menu;
