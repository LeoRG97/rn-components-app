import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';
import React, { useContext, useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({ uri, style }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);
  const { theme: { colors } } = useContext(ThemeContext);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      {isLoading && (
        <ActivityIndicator
          style={{ position: 'absolute' }}
          size="large"
          color={colors.primary}
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={{
          ...(style as any),
          opacity,
        }}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};

export default FadeInImage;
