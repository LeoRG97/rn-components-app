import { View } from 'react-native';
import React from 'react';

const ItemSeparator = () => {
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.25,
        marginVertical: 5,
      }}
    />
  );
};

export default ItemSeparator;
