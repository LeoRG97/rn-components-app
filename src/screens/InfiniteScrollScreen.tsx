import { ActivityIndicator, FlatList, View } from 'react-native';
import React, { useState } from 'react';
import HeaderTitle from '../components/HeaderTitle';
import FadeInImage from '../components/FadeInImage';

const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    const newArray: number[] = [];
    for (let i = 0; i < 5; i++) {
      newArray[i] = numbers.length + i;
    }
    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 1500);
  };

  const renderItem = (item: number) => {
    return <FadeInImage uri={`https://picsum.photos/id/${item}/500/400`} />;
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <FlatList
        data={numbers}
        renderItem={({ item }) => renderItem(item)}
        keyExtractor={(item: number) => item.toString()}
        ListHeaderComponent={() => <HeaderTitle title="Infinite Scroll" />}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListFooterComponent={() => (
          <View
            style={{
              height: 150,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <ActivityIndicator size="large" color="#5856D6" />
          </View>
        )}
      />
    </View>
  );
};

export default InfiniteScrollScreen;
