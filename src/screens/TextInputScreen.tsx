import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles as globalStyles } from '../theme/AppTheme';
import { ScrollView } from 'react-native-gesture-handler';
import { useForm } from '../hooks/useForm';
import CustomSwitch from '../components/CustomSwitch';

const TextInputScreen = () => {
  const { formData, onChange } = useForm({
    name: '',
    email: '',
    phone: '',
    isSubscribed: false,
  });

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView>
        <View style={globalStyles.globalMargin}>
          <HeaderTitle title="TextInputs" />

          <TextInput
            style={styles.inputStyle}
            placeholder="Ingrese su nombre"
            autoCorrect={false}
            autoCapitalize="words"
            onChangeText={val => onChange(val, 'name')}
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Ingrese su email"
            autoCapitalize="none"
            onChangeText={val => onChange(val, 'email')}
            keyboardType="email-address"
          />

          <TextInput
            style={styles.inputStyle}
            placeholder="Ingrese su teléfono"
            onChangeText={val => onChange(val, 'phone')}
            keyboardType="numeric"
          />

          <View style={globalStyles.switchRow}>
            <Text>Subscribirme</Text>

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
