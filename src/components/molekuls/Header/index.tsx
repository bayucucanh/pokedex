import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {BackLeft} from '../../../assets/icons';
import {Avatar} from '../../../assets/images';
import {useNavigation} from '@react-navigation/native';

const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        style={styles.wrapperBack}
        onPress={() => navigation.goBack()}>
        <Image
          source={BackLeft}
          resizeMode="contain"
          style={{width: 14, height: 14}}
        />
      </TouchableOpacity>
      <Image
        source={Avatar}
        resizeMode="contain"
        style={{width: 38, height: 38, borderRadius: 8}}
      />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapperBack: {
    backgroundColor: '#373737',
    width: 38,
    height: 38,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
