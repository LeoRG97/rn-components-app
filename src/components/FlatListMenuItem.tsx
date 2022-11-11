import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext } from 'react';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
  const { name, icon, component } = menuItem;

  const navigation = useNavigation();
  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(component as any)}
      activeOpacity={0.7}>
      <View style={styles.container}>
        <Icon name={icon} size={24} color={colors.primary} />
        <Text style={{ ...styles.itemText, color: colors.text }}>{name}</Text>

        <View style={{ flex: 1 }} />

        <Icon name="chevron-forward-outline" size={24} color={colors.primary} />
      </View>
    </TouchableOpacity>
  );
};

export default FlatListMenuItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    marginLeft: 10,
    fontSize: 18,
  },
  arrow: {
    position: 'absolute',
    right: 10,
  },
});
