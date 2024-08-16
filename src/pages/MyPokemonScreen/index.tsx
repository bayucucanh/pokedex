import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Header, MenuItem, ResponsiveView} from '../../components';
import {Character, charizard, Pokeball} from '../../assets/images';
import typography from '../../constant/typography';
import {useSelector} from 'react-redux';
import {pokemonColors} from '../../constant/pokemonColors';
import {styles} from './styles';

const MyPokemonScreen = () => {
  const myPokemons = useSelector((state: any) => state.pokemon.myPokemons);

  return (
    <ResponsiveView>
      <View style={{marginTop: 32}} />
      <Header />
      <Text
        style={[
          typography.heading2Medium,
          {textAlign: 'center', marginVertical: 32},
        ]}>
        My Pokemon
      </Text>
      <FlatList
        data={myPokemons}
        keyExtractor={(item, index) => index.toString()}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        numColumns={2}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.container,
              {backgroundColor: pokemonColors[item.type]},
            ]}>
            <Image
              source={{uri: item?.imgUrl}}
              style={{width: 110, height: 110}}
            />
            <Text style={typography.bodyBold}> {item.name}</Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={[typography.bodyMedium, {textAlign: 'center'}]}>
            You don't have any pokemon
          </Text>
        }
      />
    </ResponsiveView>
  );
};

export default MyPokemonScreen;
