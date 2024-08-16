import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import typography from '../../../constant/typography';
import {Pokemon} from '../../../pages/HomeScreen/types';

const BackgroundDetail = ({name}: {name: String}) => {
  return (
    <View style={{position: 'relative'}}>
      <Text
        style={[
          typography.heading1Bold,
          {
            textAlign: 'center',
            color: '#1B1B1B',
            fontSize: 75,
            position: 'absolute',
            right: 0,
            left: 0,
          },
        ]}>
        {name}
      </Text>
      <Text
        style={[
          typography.heading1Bold,
          {
            textAlign: 'center',
            color: '#1B1B1B',
            fontSize: 75,
            position: 'absolute',
            right: 0,
            left: 0,
            top: 80,
          },
        ]}>
        {name}
      </Text>
      <Text
        style={[
          typography.heading1Bold,
          {
            textAlign: 'center',
            color: '#1B1B1B',
            fontSize: 75,
            position: 'absolute',
            right: 0,
            left: 0,
            top: 160,
          },
        ]}>
        {name}
      </Text>
      <Text
        style={[
          typography.heading1Bold,
          {
            textAlign: 'center',
            color: '#1B1B1B',
            fontSize: 75,
            position: 'absolute',
            right: 0,
            left: 0,
            top: 240,
          },
        ]}>
        {name}
      </Text>
    </View>
  );
};

export default BackgroundDetail;

const styles = StyleSheet.create({});
