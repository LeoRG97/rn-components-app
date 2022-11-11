import {
  Animated,
  Dimensions,
  Image,
  ImageSourcePropType,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useContext, useEffect, useRef, useState } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import { useAnimation } from '../hooks/useAnimation';
import { useNavigation } from '@react-navigation/native';
import { ThemeContext } from '../context/themeContext/ThemeContext';

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
  const [activeSlide, setActiveSlide] = useState(0);
  const { theme: { colors } } = useContext(ThemeContext);
  // const [isButtonVisible, setIsButtonVisible] = useState(false);

  const isButtonVisible = useRef(false);

  const navigation = useNavigation();
  const { opacity, fadeIn } = useAnimation();

  useEffect(() => {
    if (activeSlide < items.length - 1) {
      return;
    }
    fadeIn();
    isButtonVisible.current = true;
    // setIsButtonVisible(true);
  }, [activeSlide, fadeIn]);

  const navigateToMenu = () => {
    if (!isButtonVisible.current) {
      return;
    }
    navigation.navigate('Home' as any);
  };

  const renderItem = (item: Slide) => {
    return (
      <View style={{ ...styles.slide, backgroundColor: colors.background }}>
        <Image source={item.img} style={styles.slideImage} />
        <Text style={{ ...styles.title, color: colors.text }}>{item.title}</Text>
        <Text style={{ ...styles.title, color: colors.text }}>{item.desc}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Carousel
        //  ref={(c) => { this._carousel = c; }}
        data={items}
        renderItem={({ item }) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        layout="default"
        onSnapToItem={index => setActiveSlide(index)}
      />
      <View style={styles.carouselFooter}>
        <Pagination
          dotsLength={items.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: colors.primary,
          }}
        />
        <Animated.View style={{ opacity }}>
          <TouchableOpacity
            // disabled={!isButtonVisible.current}
            onPress={navigateToMenu}
            style={{ ...styles.button, backgroundColor: colors.primary }}
            activeOpacity={0.8}>
            <Text style={{ fontSize: 25, color: '#fff' }}>Entrar</Text>
            <Icon name="chevron-forward-outline" color="#fff" size={30} />
          </TouchableOpacity>
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

export default SlidesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  slide: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 40,
    justifyContent: 'center',
  },
  slideImage: {
    width: 350,
    height: 400,
    resizeMode: 'center',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#5856d6',
  },
  subtitle: {
    fontSize: 16,
  },
  carouselFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    alignItems: 'center',
  },
  button: {
    flexDirection: 'row',
    backgroundColor: '#5856D6',
    width: 140,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
