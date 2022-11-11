import React, { useContext } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import HeaderTitle from '../components/HeaderTitle';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../theme/AppTheme';

const ThemeScreen = () => {

  const { setDarkTheme, setLightTheme, theme } = useContext(ThemeContext);

  const changeTheme = () => {
    if (theme.dark) {
      return setLightTheme();
    }
    setDarkTheme();
  };

  const { colors } = theme;


  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Theme" />
      <TouchableOpacity
        onPress={changeTheme}
        activeOpacity={0.8}
        style={{
          backgroundColor: colors.primary,
          justifyContent: 'center',
          width: 150,
          height: 50,
          borderRadius: 20,
        }}>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontSize: 18,
          }}>
          Light / Dark
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ThemeScreen;
