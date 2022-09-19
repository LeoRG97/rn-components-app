import { Platform, Switch } from 'react-native';
import React, { useState } from 'react';

interface Props {
  isOn: boolean;
  onChange: (val: boolean) => void;
}

const CustomSwitch = ({ isOn, onChange }: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);

  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{ false: '#D9D9DB', true: '#5856D6' }}
      thumbColor={Platform.OS === 'android' ? '#5856D6' : ''}
      // ios_backgroundColor="#D9D9DB"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};

export default CustomSwitch;
