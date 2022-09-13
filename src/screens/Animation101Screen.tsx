/* eslint-disable prettier/prettier */
import { Animated, Button, StyleSheet, View } from 'react-native';
import React from 'react';
import { useAnimation } from '../hooks/useAnimation';

const Animation101Screen = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purpleBox,
        opacity,
        transform: [{
          translateY: position,
        }],
      }} />

      <View style={{ marginTop: 20 }}>
        <Button title="Fade In" onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }} />
        <Button title="Fade Out" onPress={fadeOut} />
      </View>
    </View>
  );
};

export default Animation101Screen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  purpleBox: {
    backgroundColor: '#5856D6',
    width: 150,
    height: 150,
  },
});
