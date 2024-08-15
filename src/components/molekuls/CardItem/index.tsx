import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {charizard, FlameBackground} from '../../../assets/images';
import typography from '../../../constant/typography';
import {styles} from './style';
import {pokemonColors} from '../../../constant/pokemonColors';
import {Pokemon} from '../../../pages/HomeScreen/types';
import {useNavigation} from '@react-navigation/native';

const CardItem = ({item}: {item: Pokemon}) => {
  const pokemonColor = pokemonColors[item.type];
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DetailScreen')}
      style={[
        styles.container,
        {marginTop: 30, marginBottom: 20, backgroundColor: pokemonColor},
      ]}>
      {/* <Image source={FlameBackground} style={styles.backgroundImage} /> */}
      <Image source={{uri: item?.imgUrl}} style={styles.pokemon} />
      <View style={{padding: 16}}>
        <Text style={[typography.heading2Bold, {color: '#000000', zIndex: 2}]}>
          {item?.name}
        </Text>
        <View style={styles.categoryWrapper}>
          <Text
            style={[
              typography.smallTextMedium,
              {color: '#000000', textTransform: 'capitalize'},
            ]}>
            {item.type}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;
