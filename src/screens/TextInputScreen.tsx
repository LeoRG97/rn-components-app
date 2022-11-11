import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useContext } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles as globalStyles } from '../theme/AppTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const TextInputScreen = () => {
  const { formData, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  const { theme: { colors } } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={globalStyles.globalMargin}>
          <HeaderTitle title="TextInputs" />

          <TextInput
            style={{ ...styles.inputStyle, color: colors.text, borderColor: colors.border }}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={val => onChange(val, 'name')}
          />

          <TextInput
            style={{ ...styles.inputStyle, color: colors.text, borderColor: colors.border }}
            placeholder="Ingrese su email"
            autoCapitalize="none"
            onChangeText={val => onChange(val, 'email')}
            keyboardType="email-address"
          />

          <TextInput
            style={{ ...styles.inputStyle, color: colors.text, borderColor: colors.border }}
            placeholder="Ingrese su teléfono"
            onChangeText={val => onChange(val, 'phone')}
            keyboardType="numeric"
          />

          <View style={globalStyles.switchRow}>
            <Text style={{ color: colors.text }}>Subscribirme</Text>

            <CustomSwitch
              isOn={formData.isSubscribed}
              onChange={val => onChange(val, 'isSubscribed')}
            />
          </View>
          <View style={{ height: 100 }} />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default TextInputScreen;

const styles = StyleSheet.create({
  inputStyle: {
    borderWidth: 1,
    borderColor: 'rgba(0, 0, 0, 0.3)',
    height: 50,
    paddingHorizontal: 10,
    borderRadius: 10,
    marginVertical: 10,
  },
});
