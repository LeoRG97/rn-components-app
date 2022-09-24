import { RefreshControl, ScrollView, Text, View } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
      console.log('Terminamos');
      setRefreshing(false);
      setData('Current timestamp: ' + Date.now().toString());
    }, 1500);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          progressViewOffset={40}
          colors={['white', '#5856D6']}
          title="Cargando. Por favor, espere"
          tintColor="#fff"
          titleColor="#fff"
          style={{
            backgroundColor: '#5856D6',
          }}
        />
      }>
      <View style={styles.globalMargin}>
        <HeaderTitle title="Pull to refresh" />
        {!!data && <Text>{data}</Text>}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
