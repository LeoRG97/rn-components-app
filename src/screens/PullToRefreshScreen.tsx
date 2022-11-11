import { RefreshControl, ScrollView, Text, View } from 'react-native';
import React, { useContext, useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import { styles } from '../theme/AppTheme';
import { ThemeContext } from '../context/themeContext/ThemeContext';

const PullToRefreshScreen = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState<string>();

  const { theme: { colors } } = useContext(ThemeContext);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => {
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
          colors={['white', colors.primary]}
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
        {!!data && <Text style={{ color: colors.text }}>{data}</Text>}
      </View>
    </ScrollView>
  );
};

export default PullToRefreshScreen;
