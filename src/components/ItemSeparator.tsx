import { View } from 'react-native';
import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const ItemSeparator = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <View
      style={{
        borderBottomWidth: 1,
        opacity: 0.25,
        marginVertical: 5,
        borderColor: theme.dividerColor,
      }}
    />
  );
};

export default ItemSeparator;
