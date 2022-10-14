import { ActivityIndicator, Animated, View } from 'react-native';
import React, { useState } from 'react';
import { useAnimation } from '../hooks/useAnimation';

interface Props {
  uri: string;
}

const FadeInImage = ({ uri }: Props) => {
  const { opacity, fadeIn } = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

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
          color="#5856D6"
        />
      )}
      <Animated.Image
        source={{ uri }}
        style={{
          width: '100%',
          height: 400,
          opacity,
        }}
        onLoadEnd={finishLoading}
      />
    </View>
  );
};

export default FadeInImage;
