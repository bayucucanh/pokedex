import {
  Alert,
  Animated,
  Image,
  PanResponder,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useRef} from 'react';
import {Header, ResponsiveView} from '../../components';
import typography from '../../constant/typography';
import {charizard, DetailBackground, Pokeball} from '../../assets/images';
import BackgroundDetail from '../../components/atoms/BackgroundDetail';
import {Pokemon} from '../HomeScreen/types';
import {pokemonColors} from '../../constant/pokemonColors';
import {useDispatch, useSelector} from 'react-redux';
import {addPokemonToMyList} from '../../redux/slices/pokemonSlice';
import {useDetail} from './useDetail';
import {styles} from './styles';

const DetailScreen = ({route}: any) => {
  const {item, isPokemonAlreadyCaught, pokemonColor, pan, panResponder} =
    useDetail({item: route.params.item});

  return (
    <View style={{flex: 1, backgroundColor: '#000000'}}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 16}}>
          <Header />
        </View>
        <BackgroundDetail name={item?.name} />
        <Image
          source={{uri: item?.imgUrl}}
          style={styles.imagePokemon}
          resizeMode="contain"
        />

        <Text style={[typography.heading1Bold, styles.pokemonName]}>
          {item?.name}
        </Text>
        <View style={[styles.typeWrapper, {backgroundColor: pokemonColor}]}>
          <Text
            style={[
              typography.smallTextMedium,
              {
                textAlign: 'center',
                textTransform: 'capitalize',
              },
            ]}>
            {item?.type}
          </Text>
        </View>
        <Text style={[typography.smallTextRegular, styles.descPokemon]}>
          {item.name} is known for its dragon-like appearance, with a large
          wingspan and a long, pointed tail. He is capable of using powerful
          Fire-type attacks as well as Flying-type moves.
        </Text>
        {!isPokemonAlreadyCaught && (
          <>
            <Animated.View
              style={[styles.swipeContainer, {transform: [{translateY: pan}]}]}
              {...panResponder.panHandlers}>
              <Image source={Pokeball} style={styles.pokeball} />
            </Animated.View>
            <Text style={styles.label}>Swipe up to catch pokemon</Text>
          </>
        )}
      </SafeAreaView>
    </View>
  );
};

export default DetailScreen;
