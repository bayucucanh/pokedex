import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Header, ResponsiveView} from '../../components';
import {BackLeft} from '../../assets/icons';
import {
  Avatar,
  charizard,
  FlameBackground,
  Pokeball,
  PokeballBackground,
} from '../../assets/images';
import typography from '../../constant/typography';
import useHome from './useHome';
import {styles} from './styles';
import CardItem from '../../components/molekuls/CardItem';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const {memoizedPokemons, loadMorePokemon, loading} = useHome();

  return (
    <ResponsiveView>
      {/* <SafeAreaView> */}
      <Header />
      <Image
        source={PokeballBackground}
        resizeMode="contain"
        style={styles.imageBackground}
      />
      <Text style={[typography.heading1Regular, {marginTop: 32}]}>
        Select Your
      </Text>
      <View style={styles.flexTitle}>
        <Text style={[typography.heading1Bold]}>Pokèmon</Text>
        <Image source={Pokeball} resizeMode="contain" style={styles.pokeball} />
      </View>

      <FlatList
        data={memoizedPokemons}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => <CardItem item={item} />}
        onEndReached={loadMorePokemon}
        onEndReachedThreshold={1}
        ListFooterComponent={
          loading ? <ActivityIndicator size="large" color="#0000ff" /> : null
        }
      />
      {/* </SafeAreaView> */}
    </ResponsiveView>
  );
};

export default HomeScreen;
