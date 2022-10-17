import {
  Dimensions,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import React from 'react';
import Carousel from 'react-native-snap-carousel';

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

const { width: screenWidth } = Dimensions.get('window');

const SlidesScreen = () => {
  const renderItem = (item: Slide) => {
    return <Text>{item.desc}</Text>;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        //  ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
      />
    </SafeAreaView>
  );
};

export default SlidesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    paddingTop: 50,
  },
});
