import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import CustomSwitch from '../components/CustomSwitch';

const SwitchScreen = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  const handleChange = (value: boolean, field: string) => {
    setState({ ...state, [field]: value });
  };

  return (
    <View style={styles.container}>
      <HeaderTitle title="Switch" />
      <View style={styles.switchRow}>
        <Text style={styles.jsonText}>isActive</Text>
        <CustomSwitch
          isOn={true}
          onChange={val => handleChange(val, 'isActive')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.jsonText}>isHungry</Text>
        <CustomSwitch
          isOn={true}
          onChange={val => handleChange(val, 'isHungry')}
        />
      </View>
      <View style={styles.switchRow}>
        <Text style={styles.jsonText}>isHappy</Text>
        <CustomSwitch
          isOn={true}
          onChange={val => handleChange(val, 'isHappy')}
        />
      </View>

      <Text style={styles.jsonText}>{JSON.stringify(state, null, 5)}</Text>
    </View>
  );
};

export default SwitchScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
  jsonText: {
    fontSize: 25,
  },
  switchRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});
