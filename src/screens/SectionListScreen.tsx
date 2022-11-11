import { SectionList, Text, View } from 'react-native';
import React, { useContext } from 'react';
import { styles } from '../theme/AppTheme';
import HeaderTitle from '../components/HeaderTitle';
import ItemSeparator from '../components/ItemSeparator';
import { ThemeContext } from '../context/themeContext/ThemeContext';

interface Casas {
  casa: string;
  data: string[];
}

const casas: Casas[] = [
  {
    casa: 'DC Comics',
    data: [
      'Batman',
      'Superman',
      'Robin',
      'Wonder Woman',
      'Shazam',
      'Aquaman',
      'Green Lantern',
      'Batman',
      'Superman',
      'Robin',
      'Wonder Woman',
      'Shazam',
      'Aquaman',
      'Green Lantern',
      'Batman',
      'Superman',
      'Robin',
      'Wonder Woman',
      'Shazam',
      'Aquaman',
      'Green Lantern',
      'Batman',
      'Superman',
      'Robin',
      'Wonder Woman',
      'Shazam',
      'Aquaman',
      'Green Lantern',
    ],
  },
  {
    casa: 'Marvel Comics',
    data: [
      'Antman',
      'Thor',
      'Spiderman',
      'Black Widow',
      'Hawkeye',
      'Iron Man',
      'Captain America',
      'Hulk',
      'Antman',
      'Thor',
      'Spiderman',
      'Black Widow',
      'Hawkeye',
      'Iron Man',
      'Captain America',
      'Hulk',
      'Antman',
      'Thor',
      'Spiderman',
      'Black Widow',
      'Hawkeye',
      'Iron Man',
      'Captain America',
      'Hulk',
      'Antman',
      'Thor',
      'Spiderman',
      'Black Widow',
      'Hawkeye',
      'Iron Man',
      'Captain America',
      'Hulk',
    ],
  },
  {
    casa: 'Anime',
    data: ['Kenshin', 'Goku', 'Saitama'],
  },
];

const SectionListScreen = () => {

  const { theme: { colors } } = useContext(ThemeContext);
  return (
    <View style={{ ...styles.globalMargin, flex: 1 }}>
      <SectionList
        sections={casas}
        keyExtractor={(item, index) => `${item}${index}`}
        ListHeaderComponent={() => <HeaderTitle title="Section List" />}
        ListFooterComponent={() => (
          <View style={{ marginBottom: 50 }}>
            <HeaderTitle title={`Total de casas: ${casas.length}`} />
          </View>
        )}
        stickySectionHeadersEnabled
        renderItem={({ item }) => <Text style={{ color: colors.text }}>{item}</Text>}
        renderSectionHeader={({ section }) => (
          <View>
            <HeaderTitle title={section.casa} />
          </View>
        )}
        renderSectionFooter={({ section }) => (
          <HeaderTitle title={`Total: ${section.data.length}`} />
        )}
        ItemSeparatorComponent={ItemSeparator}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default SectionListScreen;
