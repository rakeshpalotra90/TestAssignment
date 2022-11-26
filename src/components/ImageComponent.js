import React from 'react';
import {Image, StyleSheet} from 'react-native';

export const Img = ({source, imageStyle, resizeMode = 'contain'}) => {
  return (
    <Image
      source={source}
      resizeMode={resizeMode}
      style={[styles.image, imageStyle]}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 30,
    height: 18,
  },
});
