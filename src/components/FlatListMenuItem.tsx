import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { MenuItem } from '../interfaces/appInterfaces';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

interface Props {
  menuItem: MenuItem;
}

const FlatListMenuItem = ({ menuItem }: Props) => {
  const { name, icon, component } = menuItem;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(component as any)}
      activeOpacity={0.7}>
      <View style={styles.container}>
        <Icon name={icon} size={24} color="#5856D6" />
        <Text style={styles.itemText}>{name}</Text>

        <View style={{ flex: 1 }} />

        <Icon name="chevron-forward-outline" size={24} color="gray" />
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
