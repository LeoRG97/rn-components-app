import { View, Text, Button, Modal } from 'react-native';
import React, { useState } from 'react';
import { styles } from '../theme/AppTheme';
import HeaderTitle from '../components/HeaderTitle';

const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.globalMargin}>
      <HeaderTitle title="Modal" />

      <Button title="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="fade" transparent>
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#fff',
              width: 200,
              height: 200,
              justifyContent: 'center',
              alignItems: 'center',
              shadowOffset: {
                width: 0,
                height: 10,
              },
              shadowOpacity: 0.25,
              elevation: 10,
            }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Modal open</Text>
            <Text style={{ fontSize: 16, fontWeight: '300', marginBottom: 20 }}>
              Cuerpo del modal
            </Text>
            <Button title="Cerrar modal" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
