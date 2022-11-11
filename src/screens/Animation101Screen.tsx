/* eslint-disable prettier/prettier */
import { Animated, Button, StyleSheet, View } from 'react-native';
import React, { useContext } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation101Screen = () => {

  const { opacity, position, fadeIn, fadeOut, startMovingPosition } = useAnimation();
  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Animated.View style={{
        ...styles.purpleBox,
        backgroundColor: colors.primary,
        opacity,
        transform: [{
          translateY: position,
        }],
      }} />

      <View style={{ marginTop: 20 }}>
        <Button title="Fade In" onPress={() => {
          fadeIn();
          startMovingPosition(-100);
        }}
          color={colors.primary}
        />
        <Button
          title="Fade Out"
          onPress={fadeOut}
          color={colors.primary}
        />
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
