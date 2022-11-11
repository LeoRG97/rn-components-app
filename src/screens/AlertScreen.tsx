import { Button, View, Alert } from 'react-native';
import React, { useContext } from 'react';
import nativePrompt from 'react-native-prompt-android';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const AlertScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);
  const showAlert = () => {
    Alert.alert(
      'Título',
      'Este es el mensaje de la alerta',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      {
        cancelable: true,
      },
    );
  };

  const showPrompt = () => {
    // utilizar este package si quieres usarlo para Android y no sólo para iOS
    nativePrompt(
      'Enter password',
      'Enter your password to claim your $1.5B in lottery winnings',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: password => console.log('OK Pressed, password: ' + password),
        },
      ],
      {
        type: 'secure-text',
        cancelable: false,
        defaultValue: 'test',
        placeholder: 'placeholder',
      },
    );
  };

  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Alerts" />
      <Button title="Mostrar alerta" onPress={showAlert} color={colors.primary} />
      <View style={{ height: 10 }} />
      <Button title="Mostrar prompt" onPress={showPrompt} color={colors.primary} />
    </View>
  );
};

export default AlertScreen;
