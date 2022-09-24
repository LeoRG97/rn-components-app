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
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <View>
            {/* contenido del modal */}
            <HeaderTitle title="Modal open" />
            <Text>Cuerpo del modal</Text>
            <Button title="Cerrar modal" onPress={() => setIsVisible(false)} />
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default ModalScreen;
