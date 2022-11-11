import { Animated, PanResponder, StyleSheet, View } from 'react-native';
import React, { useContext, useRef } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const Animation102Screen = () => {
  const { theme: { colors } } = useContext(ThemeContext);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event(
      [
        null,
        {
          dx: pan.x,
          dy: pan.y,
        },
      ],
      { useNativeDriver: false },
    ),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: {
          x: 0,
          y: 0,
        },
        // en este caso, useNativeDriver debe ir en false porque esta animación no es compatible con él
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View
        {...panResponder.panHandlers}
        style={[pan.getLayout(), { ...styles.purpleBox, backgroundColor: colors.primary }]}
      />
    </View>
  );
};

export default Animation102Screen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: 'red',
    width: 150,
    height: 150,
  },
});
